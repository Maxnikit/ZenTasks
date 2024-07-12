import { Title, Text, Anchor, getPrimaryShade, Button, Center, Stack } from '@mantine/core';
import classes from './Welcome.module.css';
import Link from 'next/link';

export function Welcome() {
  return (
    <Stack>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text
          inherit
          component="span"
          c="teal"
          // style={{ color: 'var(--mantine-primary-color-filled)' }}
        >
          ZenTasks
        </Text>
      </Title>
      <Title order={1} ta="center" size="lg" mx="auto" mt="xl">
        Balance your Your Tasks with Ease and Serenity
      </Title>
      {/* TODO later lead to login page */}
      <Button component={Link} href="/webapp" px={30} radius={20} mx="auto">
        Start now
      </Button>
      <Button component={Link} href="/login" px={30} radius={20} mx="auto">
        TEMPORARY Login
      </Button>
    </Stack>
  );
}
