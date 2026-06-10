import members from '../data/committee.yaml';

export default function Committee() {
 return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-4">
      
      <div className="flex flex-row gap-4 overflow-x-auto p-4 w-full">
        
        {members.map((member, index) => (
          <div 
            key={index} 
            className="carousel-item w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
          >
            <div className="card w-full bg-base-200 shadow-sm border border-base-300">
              <figure className="px-6 pt-6">
                <div className="avatar">
                  <div className={`w-24 h-24 rounded-full ring ring-${member.badgeColor || 'primary'} ring-offset-base-100 ring-offset-2`}>
                    <img src={member.img} alt={member.name} />
                  </div>
                </div>
              </figure>
              
              <div className="card-body items-center text-center p-6">
                <h2 className="card-title text-lg font-bold">{member.name}</h2>
                
                <div className={`badge badge-${member.badgeColor || 'primary'} font-medium tracking-wide`}>
                  {member.role}
                </div>
                
                <p className="text-sm text-base-content/70 mt-2">{member.bio}</p>
                
                <div className="card-actions mt-4">
                  <a href={`mailto:${member.email}`} className="btn btn-sm btn-outline btn-ghost">
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
