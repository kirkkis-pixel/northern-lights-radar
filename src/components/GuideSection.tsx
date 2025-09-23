import Link from 'next/link';

export default function GuideSection() {
  const guides = [
    {
      title: 'How to See the Northern Lights',
      description: 'Complete beginner\'s guide to aurora hunting in Finland',
      href: '/guide/how-to-see-the-northern-lights',
      icon: '🌟'
    },
    {
      title: 'Best Time in Finland',
      description: 'When and where to see the aurora in different seasons',
      href: '/guide/best-time-in-finland',
      icon: '⏰'
    },
    {
      title: 'Camera Settings',
      description: 'Photography tips for capturing the aurora borealis',
      href: '/guide/camera-settings',
      icon: '📸'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Aurora Hunting Guides
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="block bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{guide.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {guide.title}
              </h3>
              <p className="text-gray-600">
                {guide.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

