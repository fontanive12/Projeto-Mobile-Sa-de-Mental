import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { theme } from '../components/styles/DefaultTheme';

export const ViewCharts = () => {

  const { width } = Dimensions.get('window');

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

  const dataProgress = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };

  const dataBar = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <SafeAreaView >
      <View>
        <ScrollView>
          <>
            <Text>
              Bezier Line Chart
            </Text>

            <Text style={{ marginTop: 20, fontSize: 20 }}>LineChart</Text>
            <LineChart
              data={data}
              width={width}
              height={220}
              verticalLabelRotation={30}
              chartConfig={chartConfig}
              bezier
              fromZero={true}
            />

            <Text style={{ marginTop: 20, fontSize: 20 }}>ProgressChart</Text>
            <ProgressChart
              data={dataProgress}
              width={width}
              height={220}
              strokeWidth={16}
              radius={32}
              chartConfig={chartConfig}
              hideLegend={false}
            />

            <Text style={{ marginTop: 20, fontSize: 20 }}>BarChart</Text>
            <BarChart
              data={dataBar}
              width={width}
              height={250}
              yAxisLabel="R$ "
              yAxisSuffix=''
              chartConfig={chartConfig}
              verticalLabelRotation={20}
              fromZero={true}
            />
          </>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}