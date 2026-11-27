import { Fragment } from "react";
import { skills } from "@/data/site";

export function SkillsStrip() {
  return (
    <div className="border-b border-line">
      <ul
        aria-label="Compétences principales"
        className="mx-auto flex max-w-[1160px] flex-wrap justify-center gap-x-10 gap-y-3 px-6 py-6 font-display text-[22px] font-semibold text-faint sm:px-8"
      >
        {skills.map((skill, i) => (
          <Fragment key={skill}>
            {i > 0 && (
              <li aria-hidden="true" className="text-accent-text">
                ✦
              </li>
            )}
            <li>{skill}</li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
