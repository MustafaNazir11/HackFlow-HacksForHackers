// PROMPT 1

export const mvpPrompt = ({ idea, stack, hours, team }) => `
You are a hackathon mentor.

Project idea: ${idea}
Tech stack: ${stack}
Time left: ${hours} hours
Team size: ${team}

Generate:
1. Core problem
2. 3–5 must-have MVP features (strict)
3. Nice-to-have features
4. High-level architecture
5. Common pitfalls

Keep it realistic for a 48-hour hackathon.
`;

// PROMPT 2
export const taskPrompt = (features) => `
Break the following MVP features into tasks.

Features:
${features}

Rules:
- Use bullet points
- Include time estimates per task (in hours)
- Keep total under 80% of available time
- Be realistic for a hackathon team

Output only the task list.
`;


// PROMPT 3

export const demoPrompt = ({ project, features }) => `
Generate a 2-minute hackathon demo script.

Project name: ${project}
Features built:
${features}

Include:
- Problem
- Solution
- Live demo flow
- Impact
`;
