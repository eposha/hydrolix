import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';

import { TabContainer } from 'styles/containers';
import Tab from 'views/components/Tab';
import { useTranslation } from 'src/hooks/translation';

const ChangePassword = dynamic(() => import('./components/ChangePassword'));
const PersonalSettings = dynamic(() => import('./components/PersonalSettings'));

const UserSettings = () => {
  const t = useTranslation();

  const [activeTab, setActiveTab] = useState('change-password');

  const renderActiveTab = useCallback(() => {
    return activeTab === 'change-password' ? <ChangePassword /> : <PersonalSettings />;
  }, [activeTab]);

  return (
    <>
      <TabContainer>
        <Tab
          label={t.profile.changePass.tabLabel}
          id="change-password"
          dataTestId="change-password-tab"
          isActive={activeTab === 'change-password'}
          onClick={setActiveTab}
        />
        <Tab
          label={t.profile.settings.tabLabel}
          id="personal-settings"
          dataTestId="personal-settings-tab"
          isActive={activeTab === 'personal-settings'}
          onClick={setActiveTab}
        />
      </TabContainer>
      {renderActiveTab()}
    </>
  );
};

export default UserSettings;
