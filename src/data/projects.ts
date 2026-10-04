export interface Project {
    id: string
    title: string
    summary?: string
    stack?: string[]
    repoUrl?: string
    status: 'in-progress' | 'completed'
}

export const projects: Project[] = [
{
    id: "cybernova",
    title: "CyberNova",
    repoUrl: 'https://github.com/sebas-cat/Cryptography-tool---CYBERNOVA',
    status: "in-progress",
},
{
    id: "University-assistant",
    title: "University Assistant Chatbot",
    repoUrl: 'https://github.com/sebas-cat/Chatbot-',
    status: "in-progress",
},
{
    id: "electoral-sql",
    title: "Electoral SQl Database",
    repoUrl: '---',
    status: "completed",
},
]