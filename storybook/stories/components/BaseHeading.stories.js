export default {
  title: 'Components/Base/BaseHeading',
  argTypes: {
    text: {
      type: 'string',
      defaultValue: 'Heading 1',
    },
    size: {
      type: 'string',
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      },
      defaultValue: 'h1',
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
            'Base component for headings. Allows for different sizes with html tags for semantic markup.',
      },
    },
  },
};

const Template = ({ text, size }) => {
  return `<${size}>${text}</${size}>`;
};

export const H1 = Template.bind({});
export const H2 = () => '<h2 class="text-h2">Heading 2</h2>'
export const H3 = () => '<h3 class="text-h3">Heading 3</h3>'
export const H4 = () => '<h4 class="text-h4">Heading 4</h4>'
export const H5 = () => '<h5 class="text-h5">Heading 5</h5>'
