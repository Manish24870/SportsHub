import React, { useState } from "react";
import { Modal, Box, Button, Group, Card, Text, Avatar } from "@mantine/core";

const VenuesSpenderModal = (props) => {
  const updatedPayingCustomers = props.payingCustomers.sort((a, b) => b.total - a.total);
  return (
    <Modal
      opened={props.opened}
      onClose={() => props.setOpened(false)}
      title={<Text weight={700}>Venue Spenders</Text>}
    >
      <Group direction="column" grow>
        {updatedPayingCustomers.map((customer) => (
          <Card withBorder key={customer._id}>
            <Group position="apart">
              <Avatar src={customer._id.profile.photo} radius="xl" />
              <Box>
                <Text weight={600}>{customer._id.name}</Text>
                <Text size="sm">{customer._id.email}</Text>
              </Box>
              <Text>Rs. {customer.total}</Text>
            </Group>
          </Card>
        ))}
      </Group>
    </Modal>
  );
};

export default VenuesSpenderModal;
