"use client";

import Button from "@/app/_components/common/Button";

export default function Remote() {
  return (
    <div className="sticky top-10 w-[18rem] border border-black-100 h-[420px] rounded-xl p-8">
      <div className="text-green-400 text-h2 font-bold">23.5%</div>
      <div className="flex-start flex h-2 w-full overflow-hidden rounded-full bg-gray-300 font-sans text-xs font-medium">
        <div className="flex items-center justify-center w-1/2 h-full overflow-hidden text-white break-all bg-green-400 rounded-full"></div>
      </div>
      <div className="mt-2">
        <span className="text-l mr-4">모금시작</span>
        <span className="text-l">2024.04.10</span>
      </div>
      <div className="grid grid-rows divide-y divide-gray-400 h-[12rem] mt-2 mb-2">
        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <p className="text-h6 font-bold">모금작물</p>
            <p className="text-h6">6종</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <p className="text-h6 font-bold">모금완료까지</p>
            <p className="text-h6">3종</p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex justify-between">
            <p className="text-h6 font-bold">참여인원</p>
            <p className="text-h6">23명</p>
          </div>
        </div>
      </div>

      <Button
        text={"기부하기"}
        bgStyles={"bg-green-400 w-full"}
        textStyles={"font-bold text-white-100 text-l"}
        handleClick={() => {}}
      />
    </div>
  );
}
