import profile from '../data/profile';
import Chip from '@mui/material/Chip';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const iconMap = {
  education: <SchoolIcon fontSize="small" />,
  experience: <WorkIcon fontSize="small" />,
  future: <RocketLaunchIcon fontSize="small" />,
};

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
      className="min-h-screen px-6 py-24 bg-gradient-to-b from-[#0F172A] to-[#020617] text-[#F2E9E4]"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold mb-3">About Me</h2>
        <p className="opacity-75 text-lg">
          Academic growth, professional impact, and what’s next.
        </p>
      </div>

      {/* Context Card */}
      <div className="max-w-4xl mx-auto mb-30">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <p className="text-sm leading-relaxed opacity-90">
            {about.introduction}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 justify-center">
            <Chip label="Full-Stack Development" color="success" variant="outlined" />
            <Chip label="Enterprise Systems" color="success" variant="outlined" />
            <Chip label="Generative AI" color="success" variant="outlined" />
            <Chip label="Leadership & Ownership" color="success" variant="outlined" />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Base line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative flex justify-between items-center">
          {about.timeline.filter(t => t.show).map((item, idx) => {
            const details = resolveDetails(item);

            return (
              <div
                key={idx}
                className="relative group flex flex-col items-center w-[120px]"
              >
                {/* Label */}
                <div className="mb-3 text-sm font-semibold text-center">
                  {item.label}
                </div>

                {/* Dot with icon */}
                <div className="
                  relative z-10
                  w-10 h-10 rounded-full
                  bg-blue-600/90
                  flex items-center justify-center
                  shadow-[0_0_25px_rgba(59,130,246,0.6)]
                  transition-all
                  group-hover:scale-110
                ">
                  {iconMap[item.type]}
                </div>

                {/* Year */}
                <div className="mt-3 text-xs opacity-70">
                  {item.year}
                </div>

                {/* Tooltip */}
                <div className="
                  absolute top-[-190px]
                  opacity-0 scale-95
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-500
                  z-50
                ">
                  <div className="
                    w-80 bg-white/10 backdrop-blur-xl
                    border border-white/20
                    rounded-xl p-4 shadow-2xl
                  ">
                    <h4 className="font-semibold text-sm mb-1">
                      {details?.title || details?.role}
                    </h4>

                    <p className="text-xs opacity-80 mb-1">
                      {details?.institute?.name || details?.companyName}
                    </p>

                    <p className="text-xs opacity-60 mb-3">
                      {details?.year || details?.period}
                    </p>

                    {details?.grade && (
                      <p className="text-xs font-medium mb-2">
                        {details.grade}
                      </p>
                    )}

                    {details?.skills?.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {details.skills.map((skill, i) => (
                          <Chip
                            key={i}
                            label={skill}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: 'primary.main',
                              color: 'primary.main',
                              fontSize: '0.7rem',
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Hint */}
      <div className="mt-8 text-center text-xs opacity-50">
        Hover or tap milestones to explore details
      </div>
    </section>
  );
};

export default About;
