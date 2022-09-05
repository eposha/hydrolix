import { ChangeEvent, useState } from 'react';
import dynamic from 'next/dynamic';

import Checkbox from 'views/components/Checkbox';
import { CFContainer, CFLContainer, GridContainer, TabContainer } from 'styles/containers';
import { H1, H2, H3, H4, H5, Text } from 'styles/typography';
import RadioButton from 'views/components/RadioButton';
import Input from 'views/components/Input';
import DropDown from 'views/components/DropDown';
import TextArea from 'views/components/TextArea';
import Tab from 'views/components/Tab';
import { useToast } from 'views/components/Toast';
import { Button, TextButton } from 'views/components/Button';
import SettingsIcon from 'public/icons/other/settings.svg';
import PlusIcon from 'public/icons/other/plusCircle.svg';
import LogOutIcon from 'public/icons/other/logOut.svg';
import EnIcon from 'public/icons/languages/en.svg';
import DropMenu from 'views/components/DropMenu';
import { DropDownOptionContainer } from 'styles/inputs';

const Modal = dynamic(() => import('views/components/Modal'));

const ComponentKit = () => {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState('first');
  const [textInputValue, setTextInputValue] = useState('');
  const [dropDownValue, setDropDownValue] = useState<Option | null>(null);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [currentTab, setCurrentTab] = useState('first');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { addToast, renderToasts } = useToast();

  const handleButtonClick = () => alert('Button clicked');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInputValue(e.target.value);
  };

  const handleToastAdd = (type: NotificationType) => {
    switch (type) {
      case 'success':
        addToast({
          type: 'success',
          title: 'Success caption',
          text: 'Successfully added to some place',
        });
        break;

      case 'info':
        addToast({ type: 'info', title: 'Info caption', text: 'Here is some info text place' });
        break;

      case 'error':
        addToast({ type: 'error', text: 'Try again in a few minutes' });
        break;

      case 'warning':
        addToast({ type: 'warning', title: 'Warning', text: 'Try again in a few minutes' });
        break;
      default:
        break;
    }
  };

  const selectOptions = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
  ];

  const languageSelectOptions = [
    {
      value: 'en',
      label: (
        <DropDownOptionContainer>
          <EnIcon />
          <Text>English</Text>
        </DropDownOptionContainer>
      ),
    },
  ];

  const setLanguage = () => {
    console.log('language changed!');
  };

  const tabsTextStrings = new Map([
    ['first', 'First tab active'],
    ['second', 'Second tab active'],
    ['third', 'Third tab active'],
  ]);

  const handleDropMenuClick = () => {
    alert('click');
  };

  const dropMenuContent = [
    { title: 'Settings', handler: handleDropMenuClick, icon: <SettingsIcon /> },
    { title: 'Create token', handler: handleDropMenuClick, icon: <PlusIcon /> },
    { title: 'LogOut', handler: handleDropMenuClick, icon: <LogOutIcon /> },
  ];

  return (
    <>
      <section>
        <H1>Typography</H1>
        <GridContainer>
          <CFContainer>
            <H1>This is a H1 header</H1>
            <H2>This is a H2 header</H2>
          </CFContainer>
          <CFContainer>
            <H3>This is a H3 header</H3>
            <H4>This is a H4 header</H4>
            <H5>This is a H5 header</H5>
          </CFContainer>
          <CFContainer>
            <Text size="xs">This is a text paragraph with font-size 11px</Text>
            <Text size="sm">This is a text paragraph with font-size 12px</Text>
            <Text>This is a text paragraph with font-size 14px</Text>
            <Text size="lg">This is a text paragraph with font-size 16px</Text>
            <Text size="xl">This is a text paragraph with font-size 18px</Text>
          </CFContainer>
        </GridContainer>
      </section>
      <section>
        <H1>Buttons</H1>
        <GridContainer>
          <CFContainer>
            <H3>Primary big</H3>
            <Button
              view="primary"
              fullWidth
              onClick={handleButtonClick}
              dataTestId="primary-fullwidth-button"
            >
              Retry
            </Button>
            <Button
              view="primary"
              fullWidth
              disabled
              isLoading
              onClick={handleButtonClick}
              dataTestId="primary-fullwidth-disabled-button"
            >
              Retry
            </Button>
          </CFContainer>
          <CFContainer>
            <H3>Secondary big</H3>
            <Button
              view="secondary"
              fullWidth
              onClick={handleButtonClick}
              dataTestId="secondary-fullwidth-button"
            >
              Cancel
            </Button>
            <Button
              view="secondary"
              fullWidth
              disabled
              isLoading
              onClick={handleButtonClick}
              dataTestId="secondary-fullwidth-disabled-button"
            >
              Cancel
            </Button>
          </CFContainer>
          <CFContainer>
            <H3>Primary medium</H3>
            <Button view="primary" onClick={handleButtonClick} dataTestId="primary-button">
              Start job
            </Button>
            <Button
              view="primary"
              disabled
              onClick={handleButtonClick}
              dataTestId="primary-disabled-button"
            >
              Start job
            </Button>
          </CFContainer>
          <CFContainer>
            <H3>Secondary medium</H3>
            <Button view="secondary" onClick={handleButtonClick} dataTestId="secondary-button">
              Start job
            </Button>
            <Button
              view="secondary"
              disabled
              onClick={handleButtonClick}
              dataTestId="secondary-disabled-button"
            >
              Start job
            </Button>
          </CFContainer>
          <CFContainer>
            <H3>Outlined</H3>
            <Button view="outlined" onClick={handleButtonClick} dataTestId="outlined-button">
              Browse file
            </Button>
            <Button
              view="outlined"
              disabled
              onClick={handleButtonClick}
              dataTestId="outlined-disabled-button"
            >
              Browse file
            </Button>
          </CFContainer>
          <CFContainer>
            <H3>Text button primary</H3>
            <TextButton
              view="primary"
              onClick={handleButtonClick}
              dataTestId="text-button-primary"
              icon={<SettingsIcon />}
            >
              Edit advanced options
            </TextButton>
            <TextButton
              view="primary"
              onClick={handleButtonClick}
              disabled
              isLoading
              dataTestId="text-button-primary-disabled"
              icon={<SettingsIcon />}
            >
              Edit advanced options
            </TextButton>
          </CFContainer>
          <CFContainer>
            <H3>Text button secondary</H3>
            <TextButton
              view="secondary"
              onClick={handleButtonClick}
              dataTestId="text-button-secondary"
            >
              Delete pool
            </TextButton>
            <TextButton
              view="secondary"
              onClick={handleButtonClick}
              disabled
              isLoading
              dataTestId="text-button-secondary-disabled"
            >
              Delete pool
            </TextButton>
          </CFContainer>
        </GridContainer>
      </section>
      <section>
        <H1>Checkbox/Radio/Switch</H1>
        <GridContainer>
          <CFLContainer gap={10}>
            <H3>Checkboxes</H3>
            <Checkbox
              label="First checkbox"
              checked={checkboxValue}
              onChange={setCheckboxValue}
              dataTestId="firstCheckbox"
            />
            <Checkbox
              label="Second checkbox"
              checked={checkboxValue}
              disabled
              onChange={setCheckboxValue}
              dataTestId="secondCheckbox"
            />
          </CFLContainer>
          <CFLContainer gap={10}>
            <H3>RadioButtons</H3>
            <RadioButton
              name="radio"
              label="First radio"
              value="firstRadio"
              selectedValue={radioValue}
              onChange={setRadioValue}
              dataTestId="firstRadio"
            />
            <RadioButton
              name="radio"
              label="Second radio"
              value="secondRadio"
              selectedValue={radioValue}
              onChange={setRadioValue}
              dataTestId="secondRadio"
            />
            <RadioButton
              name="radio"
              label="Third radio"
              value="thirdRadio"
              selectedValue={radioValue}
              disabled
              onChange={setRadioValue}
              dataTestId="disabledRadio"
            />
          </CFLContainer>
        </GridContainer>
      </section>
      <section>
        <H1>Inputs, Selects</H1>
        <GridContainer>
          <CFContainer>
            <H3>Input</H3>
            <Input
              id="firstInput"
              type="text"
              value={textInputValue}
              onChange={handleInputChange}
              placeholder="Input placeholder"
              label="Input label"
              dataTestId="someThing"
            />
            <Input
              id="secondInput"
              type="text"
              value="Disabled input"
              onChange={handleInputChange}
              placeholder="Disabled input placeholder"
              label="Disabled input"
              disabled
              dataTestId="disabledInput"
            />
            <Input
              id="thirdInput"
              type="text"
              value="4096"
              onChange={handleInputChange}
              placeholder="Input number of bytes"
              label="Memory limit"
              rightText="Bytes"
              dataTestId="RadioWithRightText"
            />
            <Input
              id="disabledInput"
              type="text"
              value="Input with error"
              onChange={handleInputChange}
              placeholder="Error input placeholder"
              label="Error input"
              error
              dataTestId="RadioWithError"
            />
          </CFContainer>
          <CFContainer>
            <H3>DropDown</H3>
            <DropDown
              options={selectOptions}
              onChange={setDropDownValue}
              placeholder="DropDown placeholder"
              value={dropDownValue}
              dataTestId="firstDropDown"
            />
            <DropDown
              options={selectOptions}
              onChange={setDropDownValue}
              placeholder="Disabled DropDown"
              value={dropDownValue}
              disabled
              dataTestId="disabledDropDown"
            />
            <DropDown
              options={selectOptions}
              onChange={setDropDownValue}
              placeholder="DropDown with error"
              value={dropDownValue}
              error
              dataTestId="DropDownWithError"
            />
            <DropDown
              options={selectOptions}
              onChange={setDropDownValue}
              placeholder="DropDown placeholder"
              value={dropDownValue}
              dataTestId="firstDropDown"
            />
            <DropDown
              options={languageSelectOptions}
              onChange={setLanguage}
              placeholder="language"
              value={languageSelectOptions[0]}
              dataTestId="language"
            />
          </CFContainer>
          <CFContainer>
            <H3>TextArea</H3>
            <TextArea
              dataTestId="textArea"
              value={textAreaValue}
              onChange={setTextAreaValue}
              placeholder="Input your text"
              label="Text Area"
            />
            <TextArea
              dataTestId="DisabledtextArea"
              value={textAreaValue}
              onChange={setTextAreaValue}
              placeholder="This field disabled"
              label="Disabled text Area"
              disabled
            />
            <TextArea
              dataTestId="TextAreaWithError"
              value={textAreaValue}
              onChange={setTextAreaValue}
              placeholder="TextArea with error"
              label="TextArea with error"
              error
            />
          </CFContainer>
        </GridContainer>
      </section>
      <section>
        <H1>Tabs</H1>
        <GridContainer>
          <CFContainer>
            <TabContainer gap={32}>
              <Tab
                label="First"
                id="first"
                dataTestId="firstTab"
                isActive={currentTab === 'first'}
                onClick={setCurrentTab}
              />
              <Tab
                label="Second"
                id="second"
                dataTestId="secondTab"
                isActive={currentTab === 'second'}
                onClick={setCurrentTab}
              />
              <Tab
                label="Third"
                id="third"
                dataTestId="thirdTab"
                isActive={currentTab === 'third'}
                onClick={setCurrentTab}
              />
              <Tab
                label="Disabled"
                id="disabled"
                dataTestId="disabledTab"
                isActive={currentTab === 'disabled'}
                onClick={setCurrentTab}
                disabled
              />
            </TabContainer>
            <div>{tabsTextStrings.get(currentTab)}</div>
          </CFContainer>
          <CFContainer>
            <TabContainer gap={32}>
              <Tab
                label="First"
                id="first"
                dataTestId="firstTab"
                isActive={currentTab === 'first'}
                onClick={setCurrentTab}
                fullfilled
              />
              <Tab
                label="Second"
                id="second"
                dataTestId="secondTab"
                isActive={currentTab === 'second'}
                onClick={setCurrentTab}
                fullfilled
              />
              <Tab
                label="Third"
                id="third"
                dataTestId="thirdTab"
                isActive={currentTab === 'third'}
                onClick={setCurrentTab}
                fullfilled
              />
              <Tab
                label="Disabled"
                id="disabled"
                dataTestId="disabledTab"
                isActive={currentTab === 'disabled'}
                onClick={setCurrentTab}
                fullfilled
                disabled
              />
            </TabContainer>
          </CFContainer>
        </GridContainer>
      </section>
      <section>
        <H1>Modals, toasts</H1>
        <GridContainer>
          <CFContainer>
            <Button view="outlined" onClick={() => setIsModalOpen(true)} dataTestId="modal-button">
              Open Modal
            </Button>
            {isModalOpen && (
              <Modal
                title="Modal title"
                content="This is a sample Modal window. Have a nice day!"
                setIsOpen={setIsModalOpen}
              >
                <Button
                  view="primary"
                  onClick={() => alert('You are agree')}
                  dataTestId="modal-agree-button"
                >
                  Agree
                </Button>
                <Button
                  view="secondary"
                  onClick={() => setIsModalOpen(false)}
                  dataTestId="modal-cancel-button"
                >
                  Cancel
                </Button>
              </Modal>
            )}

            <DropMenu name="blahblah@blah.blah" content={dropMenuContent} />
          </CFContainer>
          <CFContainer>
            <Button
              view="outlined"
              onClick={() => handleToastAdd('success')}
              dataTestId="show-succes-toast-button"
            >
              Success toast
            </Button>
            <Button
              view="outlined"
              onClick={() => handleToastAdd('info')}
              dataTestId="show-info-toast-button"
            >
              Info toast
            </Button>
            <Button
              view="outlined"
              onClick={() => handleToastAdd('warning')}
              dataTestId="show-warning-toast-button"
            >
              Warning toast
            </Button>
            <Button
              view="outlined"
              onClick={() => handleToastAdd('error')}
              dataTestId="show-error-toast-button"
            >
              Error toast
            </Button>
          </CFContainer>
        </GridContainer>
      </section>
      {renderToasts()}
    </>
  );
};

export default ComponentKit;
