interface StepProps {
  stepNumber: number;
  isActive: boolean;
  isFirst?: boolean;
}

const Step = ({ stepNumber, isActive, isFirst }: StepProps) => {
  return (
    <div
      className={`flex flex-col ${
        isFirst ? "" : "h-full"
      } items-center border border-black-100`}
    >
      {/* 첫번째가 아닐 경우에만 위에 작대기 긋고, 첫번째면 없음 */}
      {!isFirst && (
        <div
          className={`flex-1 w-1 mb-2 ${
            isActive ? "bg-green-500" : "bg-gray-300"
          }`}
        ></div>
      )}
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          isActive
            ? "bg-green-500 text-white"
            : "border-2 border-gray-300 text-gray-400"
        } mb-2`}
      >
        {isActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full fill-white"
            viewBox="0 0 24 24"
          >
            <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
          </svg>
        ) : (
          <span>{stepNumber}</span>
        )}
      </div>
    </div>
  );
};

export default Step;
