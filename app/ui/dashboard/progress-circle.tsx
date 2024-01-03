"use client";

import { Progress, Space } from "antd";

export default function ProgressCircle({ percentage }: { percentage: number }) {
  return (
    <>
      <Space wrap>
        <Progress type="circle" percent={percentage} strokeColor="" />
      </Space>
    </>
  );
}
