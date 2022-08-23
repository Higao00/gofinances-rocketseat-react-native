import React from "react";
import { Text } from "react-native";

interface Props {
    title: string;
}

export default function Welcome({ title }: Props) {
    return <Text>{title}</Text>;
}
