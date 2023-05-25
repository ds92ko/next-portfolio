import Head from 'next/head'
import Layout from "../components/layout";
import { TOKEN, DATABASE_ID } from '../config';
import ProjectItem from '../components/projects/project-item';

export default function Projects({ projectsData }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
        <Head>
          <title>프로젝트 | 다솜이 포트폴리오</title>
          <meta name="description" content="프론트엔드 개발자 다솜이의 포트폴리오" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : <span className="text-pink-500">{projectsData.length}</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 w-full">
          {projectsData.map(project => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json', 
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}` 
    },
    body: JSON.stringify({ 
      page_size: 100,
      sorts: [
        {
          property: 'workPeriod',
          direction: 'descending'
        }
      ]
    })
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
  const projects = await res.json();
  const projectsData = projects.results;

  return {
    props: { projectsData },
  }
}