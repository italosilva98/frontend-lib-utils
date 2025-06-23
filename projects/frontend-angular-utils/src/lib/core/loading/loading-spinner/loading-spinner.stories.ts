import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner.component';


const meta: Meta<LoadingSpinnerComponent> = {
  title: 'Components/Loading Spinner',
  component: LoadingSpinnerComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<LoadingSpinnerComponent>;

export const Default: Story = {
  args: {},
};
