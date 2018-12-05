/* @flow */
import React, { PureComponent } from "react";
import { ScrollView, StyleSheet } from "react-native";
import type { NavigationScreenProp } from "react-navigation";
import i18next from "i18next";
import { translate } from "react-i18next";
import { TrackScreen } from "../../../analytics";
import CountervalueSettingsRow from "./CountervalueSettingsRow";
import RateProviderSettingsRow from "./RateProviderSettingsRow";
import AuthSecurityToggle from "./AuthSecurityToggle";
import ReportErrorsRow from "./ReportErrorsRow";
import DeveloperModeRow from "./DeveloperModeRow";
import ReadOnlyModeRow from "./ReadOnlyModeRow";
import AnalyticsRow from "./AnalyticsRow";

class GeneralSettings extends PureComponent<{
  navigation: NavigationScreenProp<*>,
}> {
  static navigationOptions = {
    title: i18next.t("settings.display.title"),
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView contentContainerStyle={styles.root}>
        <TrackScreen category="Settings" name="General" />
        <CountervalueSettingsRow navigation={navigation} />
        <RateProviderSettingsRow navigation={navigation} />
        <AuthSecurityToggle navigation={navigation} />
        <ReportErrorsRow />
        <DeveloperModeRow />
        {__DEV__ && <ReadOnlyModeRow />}
        <AnalyticsRow />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: { paddingTop: 16, paddingBottom: 64 },
});

export default translate()(GeneralSettings);
