import './IconBadge.css';

type IconBadgeType = 'success' | 'warning' | 'error';

const badgeConfig: Record<
  IconBadgeType,
  { icon: string; iconColor: string; backgroundColor: string }
> = {
  success: {
    icon: '/chart.png',
    iconColor: '#0A5433',
    backgroundColor: '#E7F6E5',
  },
  warning: {
    icon: '/goal.png',
    iconColor: '#F59E0B',
    backgroundColor: '#FDE5B7',
  },
  error: {
    icon: '/coin.png',
    iconColor: '#B1360F',
    backgroundColor: '#FFE3D8',
  },
};

export const IconBadge = ({ type }: { type: IconBadgeType }) => {
  const { icon, iconColor, backgroundColor } = badgeConfig[type];

  return (
    <span
      className={`icon-badge icon-badge--${type}`}
      style={
        { '--icon-color': iconColor, '--background-color': backgroundColor } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <span className="icon-badge__icon" style={{ maskImage: `url(${icon})` }} />
    </span>
  );
};
