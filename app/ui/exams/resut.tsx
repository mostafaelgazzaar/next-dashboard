import { Result, Button } from "antd";

export default function FeedBack({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  return <Result status="success" title={title} subTitle={subTitle} />;
}
