PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_meals` (
	`id` text PRIMARY KEY NOT NULL,
	`created` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_meals`("id", "created") SELECT "id", "created" FROM `meals`;--> statement-breakpoint
DROP TABLE `meals`;--> statement-breakpoint
ALTER TABLE `__new_meals` RENAME TO `meals`;--> statement-breakpoint
PRAGMA foreign_keys=ON;