export default function ProjectItem({data}) {
  const title = data.properties.name.title[0].plain_text;
  const affiliation = data.properties.affiliation.select.name;
  const developmentField = data.properties.developmentField.select.name;
  const stacks = data.properties.stack.multi_select;
  const url = data.properties.url.url;
  const description = data.properties.description.rich_text[0].plain_text;

  console.log(`stacks: ${stacks}`);

  return (
    <div className="p-6 m-3 bg-slate-700 rounded-md">
      <h1>{title}</h1>
      <div>소속 : {affiliation}</div>
      <div>개발 분야 : {developmentField}</div>
      <div>
        <h2>기술 스택 :</h2>
        {stacks.map(stack => (
          <div key={stack.id}>{stack.name}</div>
        ))}
      </div>
      <a href={url}>{url}</a>
      <div>설명 : {description}</div>
    </div>
  )
}