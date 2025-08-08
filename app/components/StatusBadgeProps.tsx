import React from 'react';

interface StatusBadgeProps {
  status: 'Credit' | 'Debit' | 'Active';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getDotColor = () => {
    switch (status) {
      case 'Credit':
        return 'bg-app-credit';
      case 'Active':
        return 'bg-app-credit';
      case 'Debit':
        return 'bg-app-debit';
    }
  };

  return (
    <div
      className={`inline-flex items-center rounded-[16px] font-medium text-[12px] h-7 bg-app-credit-debit-bg-9 w-18 gap-1.5 justify-center`}
    >
      <div className={`w-1 h-1 rounded-full ${getDotColor()}`} />
      <span className={`text-app-text`}>{status}</span>
    </div>
  );
};

export default StatusBadge;
