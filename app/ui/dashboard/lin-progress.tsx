import { Progress, Space } from "antd";

export default function ProgressLine({ percentage }: { percentage: number }) {
  return (
    <>
      <Space wrap size={100}>
        <Progress percent={percentage} size={[100, 5]} />
      </Space>
    </>
  );
}
