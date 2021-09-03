export default {
  title: 'Components/Base/BaseHeading',
  argTypes: {
    text: {
      type: 'string',
      description: 'Heading text',
    },
    size: {
      type: 'string',
      description: 'Heading size',
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      },
      table: {
        defaultValue: { summary: 'h3' },
      },
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: 'Base component for headings. Allows for different sizes with html tags for semantic markup.',
      },
    },
  },
};

const Template = ({ text, size }) => {
  return `<${size} class="text-${size}">${text}</${size}>`;
};

export const H1 = Template.bind({});
H1.args = { text: 'Heading 1', size: 'h1' };

export const H2 = Template.bind({});
H2.args = { text: 'Heading 2', size: 'h2' };

export const H3 = Template.bind({});
H3.args = { text: 'Heading 3', size: 'h3' };

export const H4 = Template.bind({});
H4.args = { text: 'Heading 4', size: 'h4' };

export const H5 = Template.bind({});
H5.args = { text: 'Heading 5', size: 'h5' };