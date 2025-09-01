import Link from "next/link";
import React from "react";

// Define props type
interface WorkCardProps {
  imgSrc: string;
  projectLink?: string;
  title: string;
  desc: string;
  buildWith: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
  imgSrc,
  projectLink,
  title,
  desc,
  buildWith
}) => {

  return (
    <div className="w-full h-full flex flex-col md:flex-row p-5 rounded-md border borderColor shadow dark:shadow-dark-3 gap-3">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={imgSrc}
          alt="img"
          className="w-60 md:w-auto"
        />
      </div>
      <div className="w-full md:w-[60%] space-y-3 relative">
        <h1 className="text-2xl text-D1L1">{title}</h1>
        <div className="text-sm pb-20">
          {desc}
        </div>
        <div className="absolute bottom-0 right-0 space-y-2">
          <div className="text-xs">
            Build With: {buildWith}
          </div>
          {projectLink && (
            <div className="text-right">
              <Link href={projectLink} target="blank">
                <button className="btn-1 ">
                  View Project
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
