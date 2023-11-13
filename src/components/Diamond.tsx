import { AddIcon, ButtonIcon, Image } from '@gluestack-ui/themed';
import { EditIcon } from '@gluestack-ui/themed';
import {
  Center,
  Button,
  ButtonText,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  ModalBackdrop,
  CloseIcon,
  View,
  Avatar,
  AvatarFallbackText,
} from '@gluestack-ui/themed';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import diamond from '../assets/diamond.png';

export default function Diamond() {
  const avatar = [
    {
      id: 1,
      name: 'John',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      price: 100,
    },
    {
      id: 2,
      name: 'Jane',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
      price: 200,
    },
    {
      id: 3,
      name: 'Joe',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
      price: 300,
    },
    {
      id: 4,
      name: 'Jill',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      price: 400,
    },
    {
      id: 5,
      name: 'Jack',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      price: 500,
    },
    {
      id: 6,
      name: 'Jill',
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
      price: 600,
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const ref = React.useRef(null);
  return (
    <View>
      <Button
        size="xs"
        variant="solid"
        action="primary"
        bg="white"
        isDisabled={false}
        isFocusVisible={false}
        borderColor="white"
        borderRadius="$2xl"
        paddingRight={1}
        paddingLeft={2}>
        <Image source={diamond} alt="logo" width={30} height={25} marginRight={6} />
        <ButtonText color='black' fontSize={15} marginRight={6} >999</ButtonText>
        <Center h={300}>
      <Button onPress={() => setShowModal(true)} ref={ref} borderRadius="$full" width={10} h={40}  bg="#12486B" borderColor="$indigo600">
        <ButtonIcon as={AddIcon} />
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <View backgroundColor="transparent" width={'100%'} height={'60%'} borderRadius="$2xl" padding="$4" alignItems="center" marginBottom="$2">
              <View marginBottom="$10">
                <Heading size="lg">Change your avatar</Heading>
              </View>
              <View flexDirection="row" flexWrap="wrap" width={'100%'} justifyContent="space-between" gap={10}>
                {avatar.map((item) => (
                  <View
                    key={item.id}
                    backgroundColor="#12486B"
                    paddingVertical={10}
                    paddingHorizontal={10}
                    justifyContent="center"
                    alignItems="center"
                    borderRadius={10}>
                    <Image source={{ uri: item.avatar }} alt="avatar" width={100} height={100} borderRadius={100} />
                    <View display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" marginTop={20} gap={10}>
                      <Text color="white" fontWeight="bold" fontSize={20}>
                        {item.name}
                      </Text>
                      <Text color="yellow" fontWeight="bold">
                        ${item.price}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
              }}>
              <ButtonText>Confirm</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
      </Button>
    </View>
  );
}
