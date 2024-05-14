import {
  CreateServiceLinkedRoleCommand,
  GetRoleCommand,
  IAMClient,
} from "@aws-sdk/client-iam";
import {
  MigrationHubClient,
  CreateProgressUpdateStreamCommand,
} from "@aws-sdk/client-migration-hub";

console.log("hello!");
console.log(
  CreateServiceLinkedRoleCommand,
  GetRoleCommand,
  IAMClient,
  MigrationHubClient,
  CreateProgressUpdateStreamCommand
);
