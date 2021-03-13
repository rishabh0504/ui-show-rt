import React, { useState } from 'react'
import { Button, Select, Radio, Input, Icon, Hr, CheckBox, Avatar } from "./components";

const options = [
  {
    label: 'Option - 1',
    value: 'option-1'
  },
  {
    label: 'Option - 2gfgsfgsfdgsdfgsdfgs',
    value: 'option-2'
  },
  {
    label: 'Option - 3',
    value: 'option-3'
  },
  {
    label: 'Option - 4',
    value: 'option-4'
  },
  {
    label: 'Option - 5',
    value: 'option-5'
  },
  {
    label: 'Option - 6',
    value: 'option-6'
  },
  {
    label: 'Option - 7',
    value: 'option-7'
  },
];

function App() {
  const [varient, setVarient] = useState('danger')

  const readData = (event) => {
    console.log('parent compoent');
  }
  const detectChange = (data) => {
    console.log(data);
  }

  const changeVarient = () => {
    setVarient('info')
  }
  return (
    <>
      <Button
        lable='Button'
        varient='success'
        size='xs'
      />
      <Button
        lable='Button'
        varient='info'
        size='xs'
      />
      <Button
        lable='Button'
        varient='danger'
        size='xs'
      />
      <Button
        lable='Button'
        varient='warning'
        size='xs'
      />
      <Button
        lable='Button'
        varient='default'
        size='xs'
      />
      <Button
        lable='Button'
        varient='success'
        size='sm'
      />
      <Button
        lable='Button'
        varient='info'
        size='sm'
      />
      <Button
        lable='Button'
        varient='danger'
        size='sm'
      />
      <Button
        lable='Button'
        varient='warning'
        size='sm'
      />
      <Button
        lable='Button'
        varient='default'
        size='sm'
      />
      <Button
        lable='Button'
        varient='success'
        size='md'
      />
      <Button
        lable='Button'
        varient='info'
        size='md'
      />
      <Button
        lable='Button'
        varient='danger'
        size='md'
      />
      <Button
        lable='Button'
        varient='warning'
        size='md'
      />
      <Button
        lable='Button'
        varient='default'
        size='md'
      />
      <Button
        lable='Button'
        varient='success'
        size='lg'
      />
      <Button
        lable='Button'
        varient='info'
        size='lg'
      />
      <Button
        lable='Button'
        varient='danger'
        size='lg'
      />
      <Button
        lable='Button'
        varient='warning'
        size='lg'
        disabled={true}
      />
      <Button
        lable='Button'
        varient='default'
        size='lg'
      />
      <Select size='sm' varient='success' options={options} onSelect={detectChange} />
      <Select size='md' varient='warning' options={options} onSelect={detectChange} />
      <Select size='lg' varient='danger' options={options} onSelect={detectChange} />
      <Select size='lg' varient='default' options={options} onSelect={detectChange} />
      <Select size='lg' varient={varient} options={options} onSelect={detectChange} />

      <Radio
        name='Radio'
        size='xs'
        disabled={false}
        type='inline'
        options={[
          { lable: 'Radio-1', value: 'r1' },
          { lable: 'Radio-2', value: 'r2' },
          { lable: 'Radio-3', value: 'r3' }
        ]}
      />

      <Radio
        name='Radio'
        size='sm'
        disabled={false}
        type='inline'
        options={[
          { lable: 'Radio-1', value: 'r1' },
          { lable: 'Radio-2', value: 'r2' },
          { lable: 'Radio-3', value: 'r3' }
        ]}
      />

      <Radio
        name='Radio'
        size='md'
        disabled={false}
        type='inline'
        options={[
          { lable: 'Radio-1', value: 'r1' },
          { lable: 'Radio-2', value: 'r2' },
          { lable: 'Radio-3', value: 'r3' }
        ]}
      />
      <Radio
        name='Radio'
        size='lg'
        disabled={false}
        type='inline'
        options={[
          { lable: 'Radio-1', value: 'r1' },
          { lable: 'Radio-2', value: 'r2' },
          { lable: 'Radio-3', value: 'r3' }
        ]}
      />

      <Radio
        name='Radio'
        size='xs'
        disabled={false}
        type='list'
        options={[
          { lable: 'Radio-1', value: 'r1' },
          { lable: 'Radio-2', value: 'r2' },
          { lable: 'Radio-3', value: 'r3' }
        ]}
      />
      <Radio
        name='Radio'
        size='sm'
        disabled={false}
        type='list'
        options={[
          { lable: 'Radio-1', value: 'r1' },
          { lable: 'Radio-2', value: 'r2' },
          { lable: 'Radio-3', value: 'r3' }
        ]}
      />
      <Radio
        name='Radio'
        size='md'
        disabled={false}
        type='list'
        options={[
          { lable: 'Radio-1', value: 'r1' },
          { lable: 'Radio-2', value: 'r2' },
          { lable: 'Radio-3', value: 'r3' }
        ]}
      />
      <Radio
        name='Radio'
        size='lg'
        disabled={false}
        type='list'
        options={[
          { lable: 'Radio-1', value: 'r1' },
          { lable: 'Radio-2', value: 'r2' },
          { lable: 'Radio-3', value: 'r3' }
        ]}
      />
      <Input
        placeholder='Type here...'
        size='xs'
        type='text'
        required={true}
      />
      <Input
        placeholder='Type here...'
        size='sm'
        type='text'
        required={true}
      />
      <Input
        placeholder='Type here...'
        size='md'
        type='text'
        required={true}
      />
      <Input
        placeholder='Type here...'
        size='lg'
        type='text'
        required={true}
      />

      <Icon classes='fa-users' />
      <Hr />
      <CheckBox
        lable='Default Label'
        disabled={false}
        size='xs'
      />

      <CheckBox
        lable='Default Label'
        disabled={false}
        size='sm'
      />
      <CheckBox
        lable='Default Label'
        disabled={false}
        size='md'
      />
      <CheckBox
        lable='Default Label'
        disabled={false}
        size='lg'
      />

      <Avatar
        size='xs'
        initial='rt'
      />
      <Avatar
        size='sm'
        initial='rt'
      />
      <Avatar
        size='md'
        initial='rt'
      />
      <Avatar
        size='lg'
        initial='rt'
      />
    </>
  );
}

export default App;
