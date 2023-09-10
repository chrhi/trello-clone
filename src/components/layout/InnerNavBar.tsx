import { FC } from "react";

interface InnerNavBarAbdullahProps {
  projectName: string;
  projectId: string;
}

const InnerNavBar: FC<InnerNavBarAbdullahProps> = ({
  projectId,
  projectName,
}) => {
  return (
    <div className="w-full h-[70px] p-4 bg-white/30 ">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-start ">
        <p className="text-white text-xl font-bold ">{projectName}</p>
      </div>
    </div>
  );
};

export default InnerNavBar;
