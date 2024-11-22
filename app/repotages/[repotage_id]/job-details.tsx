import { Card } from "antd";
import ReactMarkdown from "react-markdown";

interface JobDetailsProps {
  repotage: any; // Replace 'any' with the actual type of repotage
}

export default function JobDetails({ repotage }: JobDetailsProps) {
  return (
    <Card className="w-full md:w-2/3 shadow-md">
      <ReactMarkdown>{repotage.desc}</ReactMarkdown>
    </Card>
  );
}
