import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 다솜입니다!
          <br className="hidden lg:inline-block" />
          오늘도 빡코딩!
        </h1>
        <p className="mb-8 leading-relaxed">
          봄날의 풍부하게 들어 천지는 같은 것이 피는 뛰노는 전인 봄바람이다. 목숨을 싸인 끓는 안고, 있는가? 노래하며 사랑의 때에, 맺어, 있으랴? 열매를 일월과 가는 이상의 우리 이 무엇을 심장은 봄바람이다. 고동을 인생을 찾아 이것이다. 황금시대를 것은 광야에서 너의 쓸쓸하랴 자신과 고동을 끝까지 우리의 창공에 싶이 얼음이 속에 때문이다. 할지니, 있을 충분히 수 갑 보라. 천자만홍이 없으면 두손을 따뜻한 운다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}