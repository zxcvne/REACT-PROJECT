"use client";
import { useState } from "react";

export default function MyPage() {
  const [attendance, setAttendance] = useState(
    Array(365)
      .fill(false)
      .map(() => Math.random() > 0.7)
  );
  const [checkedToday, setCheckedToday] = useState(false);

  const handleCheckIn = () => {
    setCheckedToday(!checkedToday);
  };

  const getContributionColor = (hasContribution) => {
    if (!hasContribution) return "bg-slate-100";
    return "bg-green-500";
  };

  const weeks = [];
  for (let i = 0; i < attendance.length; i += 7) {
    weeks.push(attendance.slice(i, i + 7));
  }

  const contributionCount = attendance.filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-slate-300 bg-slate-50 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-5xl font-bold">
                JD
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 pt-2">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-slate-900">
                  John Developer
                </h1>
                <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-100 transition">
                  Follow
                </button>
              </div>
              <p className="text-xl text-slate-600 mb-4">@johndeveloper</p>
              <div className="space-y-2 text-slate-600">
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Seoul, South Korea</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🔗</span>
                  <span>johndeveloper.dev</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✉️</span>
                  <span>john@example.com</span>
                </div>
              </div>
            </div>

            {/* Check-in Button */}
            <div className="flex-shrink-0 pt-2">
              <button
                onClick={handleCheckIn}
                className={`px-6 py-3 rounded-lg font-medium transition ${
                  checkedToday
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {checkedToday ? "✓ 오늘 출석" : "출석하기"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Contributions */}
          <div className="col-span-2">
            {/* Contribution Stats */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                  Contribution Activity
                </h2>
                <div className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">
                    {contributionCount}
                  </span>{" "}
                  contributions this year
                </div>
              </div>

              {/* Contribution Graph */}
              <div className="bg-white border border-slate-300 rounded-lg p-6">
                <div className="flex gap-1 flex-wrap">
                  {weeks.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-1">
                      {week.map((hasContribution, dayIdx) => (
                        <div
                          key={dayIdx}
                          title={hasContribution ? "Checked in" : "No check-in"}
                          className={`w-3 h-3 rounded-sm cursor-pointer hover:ring-1 hover:ring-offset-1 hover:ring-slate-400 transition ${getContributionColor(
                            hasContribution
                          )}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-end gap-3 text-xs text-slate-600">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-sm bg-slate-100" />
                    <div className="w-3 h-3 rounded-sm bg-green-100" />
                    <div className="w-3 h-3 rounded-sm bg-green-300" />
                    <div className="w-3 h-3 rounded-sm bg-green-500" />
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>

            {/* Latest Activity */}
            <div className="bg-white border border-slate-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                최근 활동
              </h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 pb-4 border-b border-slate-200 last:border-b-0"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="text-slate-900 font-medium">출석했습니다</p>
                      <p className="text-sm text-slate-600">
                        {new Date(
                          Date.now() - item * 86400000
                        ).toLocaleDateString("ko-KR")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="col-span-1 space-y-6">
            {/* Summary Card */}
            <div className="bg-white border border-slate-300 rounded-lg p-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
                이번달 통계
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">출석 횟수</span>
                    <span className="text-2xl font-bold text-green-600">
                      18
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">연속 출석</span>
                    <span className="text-2xl font-bold text-blue-600">5</span>
                  </div>
                  <p className="text-xs text-slate-500">일</p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">최대 연속</span>
                    <span className="text-2xl font-bold text-purple-600">
                      12
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">일</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white border border-slate-300 rounded-lg p-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                💻 Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "TypeScript",
                  "Tailwind",
                  "Node.js",
                  "Python",
                  "Next.js",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-300 hover:bg-slate-200 transition cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Followers */}
            <div className="bg-white border border-slate-300 rounded-lg p-6">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4 flex items-center gap-2">
                👥 Followers
              </h3>
              <p className="text-3xl font-bold text-slate-900 mb-2">1,234</p>
              <p className="text-sm text-slate-600">Following 456</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
