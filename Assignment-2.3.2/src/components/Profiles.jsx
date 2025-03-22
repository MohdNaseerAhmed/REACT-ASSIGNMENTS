// src/components/Profiles.jsx
import Profile from './Profile';
import './Profiles.css';

function Profiles() {
  // Mock profile data
  const profiles = [
    {
      id: 1,
      title: 'News App using ReactJS (Parsing XML RSS feed to JSON)',
      description: 'ReactJS, XML, JSON, Christine Merino',
      author: 'Merul Kulshrestha',
      date: 'Jul 10, 2020',
    },
    {
      id: 2,
      title: 'Medium Like Blogging App Using Angular 9 and Firebase',
      description: 'Angular 9, Firebase, Miguel A.',
      author: 'Merul Kulshrestha',
      date: 'Jul 10, 2020',
    },
    {
      id: 3,
      title: 'COVID-19 Tracker (Statistics App) using Angular',
      description: 'Angular, API, Demo Dark',
      author: 'Merul Kulshrestha',
      date: 'Apr 06, 2020',
    },
  ];

  return (
    <div className="profiles">
      {profiles.map(profile => (
        <Profile
          key={profile.id}
          title={profile.title}
          description={profile.description}
          author={profile.author}
          date={profile.date}
        />
      ))}
    </div>
  );
}

export default Profiles;
