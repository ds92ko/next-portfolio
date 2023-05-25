import Head from 'next/head'
import Layout from "../components/layout";
import { TOKEN, DATABASE_ID } from '../config';
import ProjectItem from '../components/projects/project-item';

export default function Projects({ projectsData }) {
  console.log(projectsData);

  return (
    <Layout>
      <Head>
        <title>프로젝트 | 다솜이 포트폴리오</title>
        <meta name="description" content="프론트엔드 개발자 다솜이의 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>총 프로젝트 : {projectsData.length}</h1>
      {projectsData.map(project => (
        <ProjectItem key={project.id} data={project} />
      ))}
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