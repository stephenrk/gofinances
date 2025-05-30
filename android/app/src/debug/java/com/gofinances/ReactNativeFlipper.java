/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * <p>This source code is licensed under the MIT license found in the LICENSE file in the root
 * directory of this source tree.
 */
package com.gofinances;

import android.content.Context;

/**
 * Class responsible for loading Flipper inside your React Native application. This is the debug
 * flavor of it.
 *
 * Here you can add your own plugins and customize the Flipper setup.
 */
public class ReactNativeFlipper {
  /*
  public static void initializeFlipper(Context context) {
    if (FlipperUtils.shouldEnableFlipper(context)) {
      final FlipperClient client = AndroidFlipperClient.getInstance(context);

      client.addPlugin(new InspectorFlipperPlugin(context, DescriptorMapping.withDefaults()));
      client.addPlugin(new ReactFlipperPlugin());
      client.addPlugin(new DatabasesFlipperPlugin(context));
      client.addPlugin(new SharedPreferencesFlipperPlugin(context));
      client.addPlugin(CrashReporterPlugin.getInstance());

      NetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();
      client.addPlugin(networkFlipperPlugin);

      client.start();

      // Fresco Plugin needs to ensure that ImagePipelineFactory is initialized
      // Hence we run if after all native modules have been initialized
      ReactContext reactContext = context.getApplicationContext();
      if (reactContext instanceof ReactApplication) {
        ReactApplication reactApplication = (ReactApplication) reactContext;
        ReactNativeHost reactNativeHost = reactApplication.getReactNativeHost();
        ReactInstanceManager reactInstanceManager = reactNativeHost.getReactInstanceManager();
        reactInstanceManager.addReactInstanceEventListener(
            new ReactInstanceEventListener() {
              @Override
              public void onReactContextInitialized(ReactContext reactContext) {
                reactInstanceManager.removeReactInstanceEventListener(this);
                client.addPlugin(new FrescoFlipperPlugin());
              }
            });
      } else {
        client.addPlugin(new FrescoFlipperPlugin());
      }
    }
  }
  */
}