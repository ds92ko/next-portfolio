import Image from "next/image";

export default function ProjectItem({data}) {
  const imgSrc = data.cover.file.url;
  const title = data.properties.name.title[0].plain_text;
  const stacks = data.properties.stack.multi_select;
  const url = data.properties.url.url;
  const description = data.properties.description.rich_text[0].plain_text;
  const start = data.properties.workPeriod.date.start;
  const end = data.properties.workPeriod.date.end;

  const calculatedPeriod = (start, end) => {
    const [startYear, startMonth, startDay] = start.split('-');
    const [endYear, endMonth, endDay] = end.split('-');

    let startDate = new Date(startYear, startMonth, startDay);
    let endDate = new Date(endYear, endMonth, endDay);

    const diffInMs = Math.abs(endDate - startDate);
    const days = diffInMs / (1000 * 60 * 60 * 24);

    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const remainingDays = days % 30;
  
    let result = "";
  
    if (years > 0) result += years + "년 ";
    if (months > 0) result += months + "개월 ";
    if (remainingDays > 0) result += remainingDays + "일";
  
    return result.trim();
  }

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");

    return `${year}.${month}.${day}`;
  };

  return (
    <div className="project-card">
      <Image src={imgSrc} alt={`${title} cover image`} width={0} height={0} sizes="100vw" className="w-full object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-5 text-sm text-pink-500 dark:text-pink-300">{formatDate(start)} ~ {formatDate(end)} / {calculatedPeriod(start, end)}</p>
        <p className="mt-2 mb-5">{description}</p>
        <a href={url}>🔗 웹사이트 바로가기</a>
        <div className="flex flex-wrap gap-2 mt-5">
          {stacks.map(stack => (
            <span key={stack.id} className="px-3 py-1 text-sm rounded-md bg-pink-300 dark:bg-pink-500 shadow-sm">{stack.name}</span>
          ))}
        </div>
      </div>
    </div>
  )
}