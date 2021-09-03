// import { addDecorator } from "@storybook/html";

export default {
  title: 'Components/Base/AnimationCaret',
  argTypes: {
    text: {
      type: 'string',
      description: 'Text',
    },
    inline: {
      type: 'boolean',
      description: 'Inline option',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: 'This component appends an animated caret to a line of text.',
      },
    },
  },
};

const Template = ({ text, inline }) => {
  inline = inline ? ' caret-inline' : '';

  return `
    <span class="AnimationCaret${inline}">
      <span>${text}</span>
      <span aria-hidden="true" class="arrow-wrapper text-theme-red ml-1">
        <span class="arrow">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            class="IconCaret"
          >
            <path
              d="M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
        <span class="arrow-fixed">
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            class="IconCaret"
          >
            <path
              d="M7.864 7.004L1.5 13.368.086 11.954l4.948-4.95-4.948-4.95L1.5.64l6.364 6.364z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </span>
    </span>
  `;
};

// addDecorator(Template => `<div id="storyDecorator" class="w-64">${Template()}</div>`);

export const Default = Template.bind({});
Default.args = { text: 'Hover for animation', inline: false };

export const Inline = Template.bind({});
Inline.args = { text: 'Longer text to demonstrate text wrap', inline: true };