import site from "../data/site.yaml";
import Image from "@/components/image";

export default function Committee() {
  return (
    <div className="relative w-full py-4">
      <div className="flex flex-row gap-4 mx-auto overflow-x-scroll p-4 w-full">
        {site.committee.map((member, index) => (
          <div
            key={index}
            className="carousel-item shrink-0 flex flex-col items-center gap-4 w-fit"
          >
            <div className="card w-full bg-base-200 shadow-sm border border-base-300">
              <figure className=" pt-6">
                <div className="avatar">
                  <div
                    className={`w-24 h-24 rounded-full ring ring-${member.badgeColor || "primary"} ring-offset-base-100 ring-offset-2`}
                  >
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
              </figure>

              <div className="card-body items-center text-center p-6">
                <h2 className="card-title text-lg font-bold">{member.name}</h2>

                <div
                  className={`badge badge-${member.badgeColor || "primary"} font-medium tracking-wide`}
                >
                  {member.role}
                </div>
                <div className="card-actions mt-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="btn btn-sm btn-outline btn-ghost"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
