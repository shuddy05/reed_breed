import { useState, useRef } from "react";

const TOPICS = [
  { id: 1, title: "The Future of Learning: How Digital Tools are Transforming Education" },
  { id: 2, title: "Personalized Learning Journeys: Tailoring Education to Every Student" },
  { id: 3, title: "Virtual Classrooms: Bridging Borders, Bringing Global Education Home" },
  { id: 4, title: "Innovative STEM Programs: Building Tomorrow's Innovators Today" },
  { id: 5, title: "Teacher-Student Collaboration in a Digital Age: Fostering Engagement Beyond the Classroom" },
  { id: 6, title: "Student Success Stories: How Innovative Learning Tools Unlock Potential" },
  { id: 7, title: "Future Careers: Preparing Students with Skills for Tomorrow's World" },
];

const SCHOOL_CONTEXT = `
CLIENT: Loral International Schools, Nigeria
Founded: 1976 by Chief (Mrs.) Loretta Nwosu after returning from studies in Scotland
Locations:
  - Festac Town, Lagos (Day School – Nursery, Primary, Secondary)
  - Igbesa, Ogun State (Day & Boarding – Nursery, Primary, Secondary, Cambridge A-Level College)
Curriculum: Nigerian-British dual curriculum + Cambridge A-Level
Tagline: "The School of Choice"
Vision: To remain a leading light in education — moulding the spiritual, intellectual, emotional, physical and social life of students.
Mission: A passionate commitment to moulding young lives from nursery through secondary into men and women of strong character.
Facilities: Interactive whiteboards, science labs, zoological/botanical garden, swimming pool, sick bay, sports fields, music & drama, chess, scrabble, JETS (Junior Engineers Technicians Scientists), ballet, karate, Cambridge A-Level college.
Website: loralintlschools.sch.ng
`;

const SYSTEM_PROMPT = `You are a world-class video production scriptwriter specializing in 3D Pixar-style animated educational marketing films for African schools. You write for AI video generation tools.

For each scene you must produce exactly three fields:
1. keyframe_prompt — A highly detailed, cinematic image generation prompt for Nanobanana AI (3D Pixar animation style). Include: lighting, color palette, characters (Nigerian children/teachers/families), environment, mood, textures, depth of field cues. Always specify "3D Pixar-style, cinematic, photorealistic Pixar finish, warm lighting, rich colors."
2. animation_prompt — Director-level animation instructions: camera movements (pan, dolly, zoom, orbit), transition types, character motion, particle effects, timing cues, sound design hints.
3. voiceover — The narration text for this scene. Warm, aspirational, authoritative Nigerian-accented English tone. Natural pacing at ~130 words per minute.

IMPORTANT RULES:
- Every scene must feel cinematically distinct from the others
- Use real Loral school details naturally woven into scenes
- Alternate between wide establishing shots, intimate close-ups, and dynamic action shots
- Each voiceover should be 60–90 words
- Scene titles should be evocative, short (2–5 words)
- Timestamps should be evenly distributed across 5 minutes (0:00–5:00)
- Return ONLY valid JSON, no markdown, no explanation, no backticks

${SCHOOL_CONTEXT}`;

function buildUserPrompt(topic) {
  return `Generate a complete 12-scene animated video script for this topic:

TOPIC: "${topic.title}"

Return a JSON object with this exact structure:
{
  "topic_id": ${topic.id},
  "topic_title": "${topic.title}",
  "scenes": [
    {
      "scene_number": 1,
      "scene_title": "...",
      "timestamp": "0:00 – 0:25",
      "keyframe_prompt": "...",
      "animation_prompt": "...",
      "voiceover": "..."
    },
    ... (12 scenes total, timestamps evenly covering 0:00 to 5:00)
  ]
}

Make all 12 scenes vivid, specific, and production-ready. Weave in Loral International Schools details naturally. Return ONLY the JSON object.`;
}

async function generateTopic(topic, onChunk) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 4000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: buildUserPrompt(topic) }],
    }),
  });

  if (!response.ok) throw new Error(`API error: ${response.status}`);
  const data = await response.json();
  const raw = data.content?.map(b => b.text || "").join("") || "";
  const clean = raw.replace(/```json|```/g, "").trim();
  const parsed = JSON.parse(clean);
  onChunk(parsed);
  return parsed;
}

export default function App() {
  const [status, setStatus] = useState("idle"); // idle | running | done | error
  const [topics, setTopics] = useState(TOPICS.map(t => ({ ...t, state: "waiting", data: null, error: null })));
  const [current, setCurrent] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const resultRef = useRef([]);

  const updateTopic = (id, patch) => {
    setTopics(prev => prev.map(t => t.id === id ? { ...t, ...patch } : t));
  };

  const runGeneration = async () => {
    setStatus("running");
    resultRef.current = [];
    setTopics(TOPICS.map(t => ({ ...t, state: "waiting", data: null, error: null })));

    for (const topic of TOPICS) {
      setCurrent(topic.id);
      updateTopic(topic.id, { state: "generating" });
      try {
        const result = await generateTopic(topic, (data) => {
          resultRef.current.push(data);
          updateTopic(topic.id, { state: "done", data });
        });
      } catch (err) {
        updateTopic(topic.id, { state: "error", error: err.message });
        setErrorMsg(`Failed on Topic ${topic.id}: ${err.message}`);
        setStatus("error");
        setCurrent(null);
        return;
      }
    }

    setCurrent(null);
    setStatus("done");
  };

  const downloadJSON = () => {
    const output = {
      client: "Loral International Schools",
      production: "Animated Video Scripts — 3D Pixar Style",
      generated: new Date().toISOString(),
      total_topics: 7,
      total_scenes: 84,
      topics: resultRef.current,
    };
    const blob = new Blob([JSON.stringify(output, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Loral_International_Schools_All_Scripts.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const completedCount = topics.filter(t => t.state === "done").length;
  const progress = (completedCount / 7) * 100;

  const stateColor = {
    waiting: "#4a4a6a",
    generating: "#C8962E",
    done: "#2d8a4e",
    error: "#c0392b",
  };

  const stateIcon = {
    waiting: "○",
    generating: "◉",
    done: "✓",
    error: "✗",
  };

  const stateLabel = {
    waiting: "Waiting",
    generating: "Generating...",
    done: "Complete",
    error: "Failed",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0a0f2c 0%, #0d1b4b 50%, #0a0f2c 100%)",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#e8e8f0",
      padding: "40px 20px",
    }}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            fontSize: 11,
            letterSpacing: "0.3em",
            color: "#C8962E",
            marginBottom: 12,
            textTransform: "uppercase",
          }}>
            Video Production Suite
          </div>
          <h1 style={{
            fontSize: 28,
            fontWeight: "bold",
            color: "#ffffff",
            margin: "0 0 8px",
            lineHeight: 1.3,
          }}>
            Loral International Schools
          </h1>
          <h2 style={{
            fontSize: 16,
            color: "#C8962E",
            margin: "0 0 16px",
            fontWeight: "normal",
            fontStyle: "italic",
          }}>
            7-Topic Animated Script Generator
          </h2>
          <p style={{ color: "#8888aa", fontSize: 13, margin: 0 }}>
            84 scenes · 3D Pixar-style · Keyframe + Animation + Voiceover per scene
          </p>
        </div>

        {/* Progress bar */}
        {status !== "idle" && (
          <div style={{ marginBottom: 32 }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
              color: "#8888aa",
              marginBottom: 8,
            }}>
              <span>{completedCount} of 7 topics complete</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div style={{
              background: "#1a1f3d",
              borderRadius: 4,
              height: 6,
              overflow: "hidden",
            }}>
              <div style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #C8962E, #f0b84a)",
                borderRadius: 4,
                transition: "width 0.6s ease",
              }} />
            </div>
          </div>
        )}

        {/* Topic list */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 36 }}>
          {topics.map((topic) => (
            <div key={topic.id} style={{
              background: topic.state === "done"
                ? "rgba(45, 138, 78, 0.08)"
                : topic.state === "generating"
                ? "rgba(200, 150, 46, 0.1)"
                : "rgba(255,255,255,0.03)",
              border: `1px solid ${
                topic.state === "done" ? "rgba(45,138,78,0.3)"
                : topic.state === "generating" ? "rgba(200,150,46,0.5)"
                : "rgba(255,255,255,0.07)"
              }`,
              borderRadius: 8,
              padding: "14px 18px",
              display: "flex",
              alignItems: "flex-start",
              gap: 14,
              transition: "all 0.3s ease",
            }}>
              <div style={{
                minWidth: 22,
                height: 22,
                borderRadius: "50%",
                background: topic.state === "done" ? "#2d8a4e"
                  : topic.state === "generating" ? "#C8962E"
                  : topic.state === "error" ? "#c0392b"
                  : "transparent",
                border: `2px solid ${stateColor[topic.state]}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                color: topic.state === "waiting" ? "#4a4a6a" : "#fff",
                fontWeight: "bold",
                flexShrink: 0,
                marginTop: 1,
                animation: topic.state === "generating" ? "pulse 1.2s ease-in-out infinite" : "none",
              }}>
                {topic.state === "generating" ? "●" : stateIcon[topic.state]}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: 11,
                  color: "#C8962E",
                  letterSpacing: "0.1em",
                  marginBottom: 3,
                  textTransform: "uppercase",
                }}>
                  Topic {topic.id}
                </div>
                <div style={{ fontSize: 14, color: "#d4d4e8", lineHeight: 1.4 }}>
                  {topic.title}
                </div>
                {topic.state === "done" && topic.data && (
                  <div style={{ fontSize: 11, color: "#2d8a4e", marginTop: 4 }}>
                    ✓ {topic.data.scenes?.length} scenes generated
                  </div>
                )}
                {topic.state === "error" && (
                  <div style={{ fontSize: 11, color: "#e74c3c", marginTop: 4 }}>
                    ✗ {topic.error}
                  </div>
                )}
              </div>
              <div style={{
                fontSize: 11,
                color: stateColor[topic.state],
                whiteSpace: "nowrap",
                fontStyle: topic.state === "generating" ? "italic" : "normal",
              }}>
                {stateLabel[topic.state]}
              </div>
            </div>
          ))}
        </div>

        {/* Error message */}
        {errorMsg && (
          <div style={{
            background: "rgba(192, 57, 43, 0.1)",
            border: "1px solid rgba(192,57,43,0.4)",
            borderRadius: 8,
            padding: "12px 18px",
            fontSize: 13,
            color: "#e74c3c",
            marginBottom: 24,
          }}>
            {errorMsg}
          </div>
        )}

        {/* Buttons */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          {(status === "idle" || status === "error") && (
            <button onClick={runGeneration} style={{
              background: "linear-gradient(135deg, #C8962E, #e0aa44)",
              color: "#0a0f2c",
              border: "none",
              borderRadius: 8,
              padding: "14px 36px",
              fontSize: 15,
              fontWeight: "bold",
              fontFamily: "Georgia, serif",
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}>
              {status === "error" ? "⟳ Retry Generation" : "▶  Generate All 7 Scripts"}
            </button>
          )}

          {status === "running" && (
            <div style={{
              padding: "14px 36px",
              fontSize: 14,
              color: "#C8962E",
              fontStyle: "italic",
              animation: "pulse 1.5s ease-in-out infinite",
            }}>
              Generating scripts… do not close this tab
            </div>
          )}

          {status === "done" && (
            <>
              <button onClick={downloadJSON} style={{
                background: "linear-gradient(135deg, #2d8a4e, #3aad63)",
                color: "#ffffff",
                border: "none",
                borderRadius: 8,
                padding: "14px 36px",
                fontSize: 15,
                fontWeight: "bold",
                fontFamily: "Georgia, serif",
                cursor: "pointer",
                letterSpacing: "0.05em",
              }}>
                ↓  Download JSON (84 scenes)
              </button>
              <button onClick={() => { setStatus("idle"); resultRef.current = []; }} style={{
                background: "transparent",
                color: "#8888aa",
                border: "1px solid #3a3a5a",
                borderRadius: 8,
                padding: "14px 24px",
                fontSize: 14,
                fontFamily: "Georgia, serif",
                cursor: "pointer",
              }}>
                Regenerate
              </button>
            </>
          )}
        </div>

        {/* Done summary */}
        {status === "done" && (
          <div style={{
            textAlign: "center",
            marginTop: 28,
            padding: "20px",
            background: "rgba(45,138,78,0.06)",
            border: "1px solid rgba(45,138,78,0.2)",
            borderRadius: 8,
          }}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>🎬</div>
            <div style={{ fontSize: 14, color: "#d4d4e8", marginBottom: 4 }}>
              All 7 scripts complete — 84 scenes, fully production-ready.
            </div>
            <div style={{ fontSize: 12, color: "#8888aa" }}>
              JSON includes keyframe prompts, animation direction, and voiceover for every scene.
            </div>
          </div>
        )}

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    </div>
  );
}
