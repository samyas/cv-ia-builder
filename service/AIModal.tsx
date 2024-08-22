const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = 'AIzaSyBAhfw8kDMMAhvnP1w-cQmXni7uneb_8GM';//process.env.GEMINI_API_KEY;
 // const apiKey =import.meta.env.;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };

   export const AIChatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
 /* async function run() {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Job Title: Full stack java /angular devoloper , Depends on job title give me list of  summary for 3 experience level, Mid Level and Freasher level in 3 -4 lines"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "## Full Stack Java / Angular Developer - Summary Examples\n\n**Entry Level (Fresh Graduate)**\n\n* Highly motivated recent graduate with a strong foundation in Java and Angular, eager to learn and contribute to developing web applications.\n* Proven skills in object-oriented programming, RESTful APIs, and front-end development using HTML, CSS, and JavaScript.\n* Seeking a challenging entry-level position to gain practical experience and develop expertise in full-stack development. \n\n**Mid Level (2-4 Years Experience)**\n\n* Experienced full-stack developer proficient in Java, Spring Boot, and Angular, with a strong understanding of web development principles and best practices.\n* Skilled in designing and implementing RESTful APIs, building responsive user interfaces, and working with databases (e.g., MySQL, PostgreSQL).\n* Proven ability to collaborate effectively within a team, deliver high-quality code, and solve complex technical problems.\n\n**Senior Level (5+ Years Experience)**\n\n* Highly skilled and experienced full-stack developer with a deep understanding of Java, Spring framework, and Angular, leading the development of complex web applications.\n* Expertise in architecting scalable and maintainable systems, implementing best practices for code quality and security, and mentoring junior developers.\n* Proven track record of successfully delivering projects on time and within budget, with a strong focus on delivering user-centric solutions. \n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  }
  
  run();*/