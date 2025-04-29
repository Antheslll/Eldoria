const TopOrnament = () => {
  return (
    <div className=" w-[full] relative centered-positioning">
      <div className="scale-[50%]">
        <Ornament />
      </div>
    </div>
  );
};

export default TopOrnament;

const Ornament = () => {
  return (
    <svg
      width="260"
      height="65"
      viewBox="0 0 260 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M133.489 48.1959L125.885 55.7881L118.293 48.185L125.903 5.47097e-06L133.489 48.1959Z"
        fill="white"
      />
      <path
        d="M121.479 59.3786L120.927 64.6801L115.626 64.1289L103.478 43.1997L121.479 59.3786Z"
        fill="white"
      />
      <path
        d="M130.099 59.3786L130.65 64.6801L135.951 64.1289L148.099 43.1997L130.099 59.3786Z"
        fill="white"
      />
      <line x1="189" y1="47.5" x2="260" y2="47.5" stroke="white" />
      <line x1="4.37114e-08" y1="47.5" x2="71" y2="47.5" stroke="white" />
    </svg>
  );
};

export { Ornament };
