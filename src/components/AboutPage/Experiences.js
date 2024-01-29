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
      <div className="font-bold text-orange-600 text-lg">Experiences</div>
      <div className="flex justify-center">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className="flex flex-row gap-x-10">
                <div className="w-[450px]">2022年04月 ～ 現在</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500">TuplOS Project</div>
                  <div className="text-justify">
                    Ea exercitation consectetur cillum voluptate ipsum mollit
                    pariatur. Eiusmod nostrud tempor sit consectetur. Et nostrud
                    culpa deserunt veniam sit elit sit pariatur consequat
                    laborum duis cupidatat ea. Id excepteur occaecat ex
                    incididunt fugiat nostrud minim occaecat. Lorem veniam
                    cillum dolor est aliqua incididunt ex tempor eu
                    reprehenderit culpa proident. Do fugiat ea cupidatat aute ex
                    consectetur.
                  </div>
                  <div className="flex flex-row gap-x-2 mt-2">
                  <Chip label="PYTHON" size="small" sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}} />
                  <Chip label="HTML" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="CSS" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Javascript" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Bootstrap" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
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
                <div className="w-[450px]">6ヶ月</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500">Web Application Development</div>
                  <div className="text-justify">
                    Ea exercitation consectetur cillum voluptate ipsum mollit
                    pariatur. Eiusmod nostrud tempor sit consectetur. Et nostrud
                    culpa deserunt veniam sit elit sit pariatur consequat
                    laborum duis cupidatat ea. Id excepteur occaecat ex
                    incididunt fugiat nostrud minim occaecat. Lorem veniam
                    cillum dolor est aliqua incididunt ex tempor eu
                    reprehenderit culpa proident. Do fugiat ea cupidatat aute ex
                    consectetur.
                  </div>
                  <div className="flex flex-row gap-x-2 mt-2">
                  <Chip label="PYTHON" size="small" sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}} />
                  <Chip label="HTML" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="CSS" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Javascript" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Bootstrap" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
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
                <div className="w-[450px]">5ヶ月</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500">PC予約管理システム</div>
                  <div className="text-justify">
                    Ea exercitation consectetur cillum voluptate ipsum mollit
                    pariatur. Eiusmod nostrud tempor sit consectetur. Et nostrud
                    culpa deserunt veniam sit elit sit pariatur consequat
                    laborum duis cupidatat ea. Id excepteur occaecat ex
                    incididunt fugiat nostrud minim occaecat. Lorem veniam
                    cillum dolor est aliqua incididunt ex tempor eu
                    reprehenderit culpa proident. Do fugiat ea cupidatat aute ex
                    consectetur.
                  </div>
                  <div className="flex flex-row gap-x-2 mt-2">
                  <Chip label="PYTHON" size="small" sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}} />
                  <Chip label="HTML" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="CSS" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Javascript" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Bootstrap" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
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
                <div className="w-[450px]">11ヶ月</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500">ファイバーケーブルを 構築材料情報管理開 発</div>
                  <div className="text-justify">
                    Ea exercitation consectetur cillum voluptate ipsum mollit
                    pariatur. Eiusmod nostrud tempor sit consectetur. Et nostrud
                    culpa deserunt veniam sit elit sit pariatur consequat
                    laborum duis cupidatat ea. Id excepteur occaecat ex
                    incididunt fugiat nostrud minim occaecat. Lorem veniam
                    cillum dolor est aliqua incididunt ex tempor eu
                    reprehenderit culpa proident. Do fugiat ea cupidatat aute ex
                    consectetur.
                  </div>
                  <div className="flex flex-row gap-x-2 mt-2">
                  <Chip label="PYTHON" size="small" sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}} />
                  <Chip label="HTML" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="CSS" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Javascript" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Bootstrap" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
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
                <div className="w-[450px]">4ヶ月</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500">Chikyoku Tool 開発</div>
                  <div className="text-justify">
                    Ea exercitation consectetur cillum voluptate ipsum mollit
                    pariatur. Eiusmod nostrud tempor sit consectetur. Et nostrud
                    culpa deserunt veniam sit elit sit pariatur consequat
                    laborum duis cupidatat ea. Id excepteur occaecat ex
                    incididunt fugiat nostrud minim occaecat. Lorem veniam
                    cillum dolor est aliqua incididunt ex tempor eu
                    reprehenderit culpa proident. Do fugiat ea cupidatat aute ex
                    consectetur.
                  </div>
                  <div className="flex flex-row gap-x-2 mt-2">
                  <Chip label="PYTHON" size="small" sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}} />
                  <Chip label="HTML" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="CSS" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Javascript" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Bootstrap" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
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
                <div className="w-[450px]">6ヶ月</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500">ビル管理システム</div>
                  <div className="text-justify">
                    Ea exercitation consectetur cillum voluptate ipsum mollit
                    pariatur. Eiusmod nostrud tempor sit consectetur. Et nostrud
                    culpa deserunt veniam sit elit sit pariatur consequat
                    laborum duis cupidatat ea. Id excepteur occaecat ex
                    incididunt fugiat nostrud minim occaecat. Lorem veniam
                    cillum dolor est aliqua incididunt ex tempor eu
                    reprehenderit culpa proident. Do fugiat ea cupidatat aute ex
                    consectetur.
                  </div>
                  <div className="flex flex-row gap-x-2 mt-2">
                  <Chip label="PYTHON" size="small" sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}} />
                  <Chip label="HTML" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="CSS" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Javascript" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Bootstrap" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
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
                <div className="w-[450px]">2ヶ月</div>
                <div className="flex flex-col justify-start">
                  <div className="text-orange-500">社内のホームページ開 発</div>
                  <div className="text-justify">
                    Ea exercitation consectetur cillum voluptate ipsum mollit
                    pariatur. Eiusmod nostrud tempor sit consectetur. Et nostrud
                    culpa deserunt veniam sit elit sit pariatur consequat
                    laborum duis cupidatat ea. Id excepteur occaecat ex
                    incididunt fugiat nostrud minim occaecat. Lorem veniam
                    cillum dolor est aliqua incididunt ex tempor eu
                    reprehenderit culpa proident. Do fugiat ea cupidatat aute ex
                    consectetur.
                  </div>
                  <div className="flex flex-row gap-x-2 mt-2">
                  <Chip label="PYTHON" size="small" sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}} />
                  <Chip label="HTML" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="CSS" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Javascript" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
                  <Chip label="Bootstrap" size="small"  sx={{backgroundColor:"#FFCDB4", padding:2, color:"#FF8D57"}}/>
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
