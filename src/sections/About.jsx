import profile from '../data/profile';
import Chip from '@mui/material/Chip';

const About = () => {
  const { about } = profile;

  const resolveDetails = (item) => {
    if (item.type === 'education') {
      return about.education.find(e => e.title === item.ref);
    }
    if (item.type === 'experience') {
      return about.experience.find(e => e.companyName === item.ref);
    }
    return item;
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-[#0F172A] to-[#020617] text-[#F2E9E4]"
    >
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-2">About Me</h2>
        <p className="opacity-70">
          A snapshot of my academic and professional journey.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-6xl">
        {/* Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/20" />

        <div className="relative flex justify-between items-center">
          {about.timeline
            .filter(t => t.show)
            .map((item, idx) => {
              const details = resolveDetails(item);

              return (
                <div key={idx} className="relative group flex flex-col items-center">
                  {/* Top label */}
                  <div className="mb-3 text-sm font-semibold tracking-wide">
                    {item.label}
                  </div>

                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)] cursor-pointer z-10" />

                  {/* Year */}
                  <div className="mt-3 text-xs opacity-70">
                    {item.year}
                  </div>

                  {/* Tooltip */}
                  <div className="
                    absolute top-[-170px] w-72
                    opacity-0 scale-95
                    group-hover:opacity-100 group-hover:scale-100
                    transition-all duration-300
                    z-50
                  ">
                    <div className="
                      bg-white/10 backdrop-blur-xl
                      border border-white/20
                      rounded-xl p-4 shadow-2xl
                    ">
                      {details?.title && (
                        <h4 className="font-bold text-sm mb-1">
                          {details.title || details.role}
                        </h4>
                      )}

                      {(details?.institute || details?.companyName) && (
                        <p className="text-xs opacity-80 mb-1">
                          {details.institute?.name || details.companyName}
                        </p>
                      )}

                      {(details?.year || details?.period) && (
                        <p className="text-xs opacity-60 mb-2">
                          {details.year || details.period}
                        </p>
                      )}

                      {details?.grade || details?.role && (
                        <p className="text-xs font-medium">
                          {details.grade || details.role}
                        </p>
                      )}

                      { (details?.description || details?.skills?.length > 0) && (
  <div className="mt-3 space-y-3">
    {/* Description */}
    {details?.description && (
      <p className="text-xs opacity-80 leading-relaxed">
        {details.description}
      </p>
    )}

    {/* Skills as MUI Chips */}
    {details?.skills?.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {details.skills.map((skill, i) => (
          <Chip
            key={i}
            label={skill}
            size="small"
            variant="outlined"
            className="
              text-xs font-medium
              bg-gradient-to-r from-blue-50 to-indigo-50
              dark:from-blue-950/30 dark:to-indigo-950/30
            "
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              '& .MuiChip-label': {
                px: 1.5,
              },
            }}
          />
        ))}
      </div>
    )}
  </div>
)}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default About;
