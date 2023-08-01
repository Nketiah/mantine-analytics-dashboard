import React from 'react';
import Head from "next/head";
import Layout from "@/layout";
import {ActionIcon, Container, Divider, Grid, Group, Paper, Stack, Text, Title} from "@mantine/core";
import {IconRefresh} from "@tabler/icons-react";
import {FilterDateMenu, MobileDesktopChart, ProjectsTable, RevenueChart, SalesChart, StatsGrid} from "@/components";
import StatsData from "../../mocks/StatsGrid.json"
import ProjectsData from "../../mocks/Projects.json"

function Default() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Layout>
                <Container>
                    <Paper>
                        <Group>
                            <Stack>
                                <Title>Default dashboard</Title>
                                <Text>Welcome back, Kelvin! We've missed you. 👋</Text>
                            </Stack>
                            <Group>
                                <ActionIcon>
                                    <IconRefresh/>
                                </ActionIcon>
                                <FilterDateMenu/>
                            </Group>
                        </Group>
                    </Paper>
                    <Divider/>
                    <StatsGrid data={StatsData.data}/>
                    <Grid>
                        <Grid.Col lg={8}>
                            <RevenueChart/>
                        </Grid.Col>
                        <Grid.Col lg={4}>
                            <SalesChart/>
                        </Grid.Col>
                        <Grid.Col lg={4}>
                            <MobileDesktopChart/>
                        </Grid.Col>
                        <Grid.Col lg={8}>
                            <Paper>
                                <ProjectsTable data={ProjectsData.slice(0, 6)}/>
                            </Paper>
                        </Grid.Col>
                    </Grid>
                </Container>
            </Layout>
        </>
    );
}

export default Default;
