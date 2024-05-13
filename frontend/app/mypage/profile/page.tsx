"use client";

import { useRouter } from "next/navigation";
import { MEMBER_URL } from "@/utils/ServerApi";
import { useUserStore } from "@/app/_stores/userStore";
import MiniNavigation from "../component/mini-nav";
import Modal from "@/app/_components/common/Modal";
import Button from "@/app/_components/common/Button";
import ProfileCSR from "../component/profile-csr";
import ChangeRole from "../component/change-role";

export default function MyPage() {
  const { userInfo, resetAuth } = useUserStore();
  const router = useRouter();
  const handleDelUser = async () => {
    const response = await fetch(`${MEMBER_URL}/v1/user`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userInfo.accessToken}`,
        "device-id": `${userInfo.deviceId}`,
      },
    });
    if (response && response.ok) {
      resetAuth();
      router.push("/");
    }
  };

  return (
    <div>
      <div className="w-full p-[70px] inline-flex flex-col items-center justify-center gap-[115px] relative bg-white">
        <div className="flex flex-col items-center gap-[70px] px-[150px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="mt-[-1.00px] font-t-h1 font-[number:var(--t-h1-font-weight)] text-green-500 text-[length:var(--t-h1-font-size)] tracking-[var(--t-h1-letter-spacing)] leading-[var(--t-h1-line-height)] relative w-fit whitespace-nowrap [font-style:var(--t-h1-font-style)]">
            마이페이지
          </div>

          <div className="inline-flex items-start justify-center gap-[40px] relative flex-[0_0_auto]">
            {/* 왼쪽 디브 */}

            <MiniNavigation status={"profile"} />
            {/* 오른쪽 디브 */}
            <div className="inline-flex flex-col items-start justify-center gap-[15px] p-[15px] relative flex-[0_0_auto] border !rounded-[10px] border-solid border-graygray-300  w-[920px]">
              {/* 상위 디브 : 위치 안내 및 게시하기 버튼 */}
              <div className="flex w-full h-[40px] items-center justify-between mb-5">
                <div>마이페이지 〉 내 프로필</div>
                <ChangeRole />
              </div>
              {/* 프로필 리스트 */}
              <div className="justify-center mx-auto">
                <ProfileCSR />
              </div>
              <Modal
                buttonText={"회원 탈퇴 하기"}
                buttonBgStyles={"bg-red-500"}
                buttonTextStyles={"text-font-m5 text-white-100"}
                Title="정말 탈퇴하시겠습니까?"
                subTitle="탈퇴한 뒤에는 아이디 및 데이터를 복구할 수 없으니 신중히 진행하세요."
                Titlecss={"text-h3 font-extrabold"}
                subTitlecss={"text-base font-bold"}
                Modalcss={"w-[530px]"}
                Titlebottom={
                  <></>
                  // <div className="bg-red-300 w-[22rem] h-6 rounded-xl absolute top-11 left-6 z-[-1] opacity-70" />
                }
                next={"탈퇴하기"}
                contents={<></>}
                onSuccess={handleDelUser}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
