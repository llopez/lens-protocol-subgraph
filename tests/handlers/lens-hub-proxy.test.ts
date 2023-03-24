import {
  assert,
  describe,
  test,
  clearStore,
  afterAll,
} from "matchstick-as/assembly/index";

import { handleProfileCreated } from "../../src/handlers/lens-hub-proxy";
import { createProfileCreatedEvent } from "./lens-hub-proxy-utils";
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";

describe("LensHubProxy", () => {
  afterAll(() => {
    clearStore();
  });

  describe("handleProfileCreated", () => {
    test("should create a new profile", () => {
      const profileId = BigInt.fromI32(1);
      const creator = Address.fromString(
        "0x0000000000000000000000000000000000000001"
      );
      const to = Address.fromString(
        "0x0000000000000000000000000000000000000002"
      );
      const handle = "johndoe";
      const imageURI = "imageURI";
      const followModule = Address.fromString(
        "0x0000000000000000000000000000000000000003"
      );
      const followModuleReturnData = Bytes.fromI32(1);
      const followNFTURI = "followNFTURI";
      const timestamp = BigInt.fromI32(1000);

      const event = createProfileCreatedEvent(
        profileId,
        creator,
        to,
        handle,
        imageURI,
        followModule,
        followModuleReturnData,
        followNFTURI,
        timestamp
      );

      handleProfileCreated(event);
      assert.entityCount("Profile", 1);
      assert.fieldEquals(
        "Profile",
        profileId.toString(),
        "id",
        profileId.toString()
      );
      assert.fieldEquals(
        "Profile",
        profileId.toString(),
        "creator",
        creator.toHexString()
      );
      assert.fieldEquals(
        "Profile",
        profileId.toString(),
        "to",
        to.toHexString()
      );
      assert.fieldEquals("Profile", profileId.toString(), "handle", handle);
      assert.fieldEquals("Profile", profileId.toString(), "imageURI", imageURI);
      assert.fieldEquals(
        "Profile",
        profileId.toString(),
        "followModule",
        followModule.toHexString()
      );
      assert.fieldEquals(
        "Profile",
        profileId.toString(),
        "followModuleReturnData",
        followModuleReturnData.toHexString()
      );
      assert.fieldEquals(
        "Profile",
        profileId.toString(),
        "followNFTURI",
        followNFTURI
      );
      assert.fieldEquals(
        "Profile",
        profileId.toString(),
        "timestamp",
        timestamp.toString()
      );
    });
  });
});
