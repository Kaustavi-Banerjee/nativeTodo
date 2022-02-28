import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button, Text, TextInput, Alert, View } from 'react-native'
import formStyle from '../styles/form.style';


interface FormData {
  item: string;
}

export default function TodoFormScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: FormData) => {Alert.alert(data.item)};

  return (
    <View style={{ padding: 15 }}>
      <View>
        <Text style={{ fontWeight: "600", fontSize: 17, marginBottom: 8 }}>Add new task</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Controller
          control={control}
          rules={{
          required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={formStyle.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="item"
        />
        {errors.item && <Text>This is required.</Text>}
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}
