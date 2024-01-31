import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Chip from "@mui/material/Chip";

const Experiences = () => {
  return (
    <div className="container mx-auto mt-28">
      <div className="font-semibold text-orange-600 text-3xl">Experiences</div>
      <div className="flex justify-center mt-11">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator sx={{ height: 150 }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-row">
                <div className="w-[450px]">2022年04月 ～ 現在</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500 text-2xl">
                    Network Ticket Analyzer
                  </div>
                  <div className="mt-1 text-justify text-sm">
                    ネトワクの異常なログファイルを解析するシステムです。
                    そのシステムにはログファイルをチケットファイルといいます。
                    そのチケットファイルをシステムにアプロードして解析したら、詳細結果を発生します。どうして問題が起こってるかを詳しく見える結果です。
                  </div>
                  <div className="flex flex-row gap-x-2 mt-3">
                    <Chip
                      label="PYTHON"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="HTML"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="CSS"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="Javascript"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="Bootstrap"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="MongoDB"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator sx={{ height: 150 }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-row gap-x-10">
                <div className="w-[260px]">6ヶ月</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500 text-2xl">
                    Incidence Monitoring System
                  </div>
                  <div className="mt-1 text-justify text-sm">
                    事故監視システム(事故かんし）です。例えば　マップの上から東京エリアのどうこかに事故が起ってるのを監視できるシステムです。
                  </div>
                  <div className="flex flex-row gap-x-2 mt-3">
                    <Chip
                      label="HTML"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="CSS"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="Javascript"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="MySQL"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator sx={{ height: 150 }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-row gap-x-10">
                <div className="w-[260px]">5ヶ月</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500 text-2xl">
                    PC予約管理システム
                  </div>
                  <div className="mt-1 text-justify text-sm">
                    それは名前の通りPC予約を管理するシステムです。
                    PCの情報とか借りる本人の情報とかを登録して予約するのを管理するシステムです。
                  </div>
                  <div className="flex flex-row gap-x-2 mt-3">
                    <Chip
                      label="JAVA"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="HTML"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="CSS"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="Javascript"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="Bootstrap"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="MySQL"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator sx={{ height: 150 }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-row gap-x-10">
                <div className="w-[260px]">11ヶ月</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500 text-2xl">
                    ファイバーケーブルを 構築材料情報管理開発
                  </div>
                  <div className="mt-1 text-justify text-sm">
                    ファイバーケーブルを構築する際の材料情報の管理システムです。
                  </div>
                  <div className="flex flex-row gap-x-2 mt-3">
                    <Chip
                      label="PYTHON"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="HTML"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="CSS"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="Javascript"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="Bootstrap"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="PostgreSQL"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator sx={{ height: 150 }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-row gap-x-10">
                <div className="w-[260px]">4ヶ月</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500 text-2xl">
                    Chikyoku Tool 開発
                  </div>
                  <div className="mt-1 text-justify text-sm">
                    置局を建築ための事前計算ツールです。旧システムのいくつかのツールを一つのツールとして総合しました。
                  </div>
                  <div className="flex flex-row gap-x-2 mt-3">
                    <Chip
                      label="Excel VBA"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator sx={{ height: 150 }}>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-row gap-x-10">
                <div className="w-[260px]">6ヶ月</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500 text-2xl">
                    ビル管理システム
                  </div>
                  <div className="mt-1 text-justify text-sm">
                    ビル管理システムです。建物の電力、空調、　照明　などが安全で効率的に運用できるかを監視するシステムです。
                  </div>
                  <div className="flex flex-row gap-x-2 mt-3">
                    <Chip
                      label="JAVA"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="HTML"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="CSS"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="Javascript"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="Bootstrap"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="MySQL"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-row gap-x-10">
                <div className="w-[260px]">2ヶ月</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500 text-2xl">
                    社内のホームページ開 発
                  </div>
                  <div className="mt-1 text-justify text-sm">
                    ホームページ開発
                  </div>
                  <div className="flex flex-row gap-x-2 mt-3">
                    <Chip
                      label="HTML"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="CSS"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="Javascript"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                    <Chip
                      label="Bootstrap"
                      size="small"
                      sx={{
                        backgroundColor: "#FFCDB4",
                        padding: 2,
                        color: "#FF8D57",
                      }}
                    />
                  </div>
                </div>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Experiences;
