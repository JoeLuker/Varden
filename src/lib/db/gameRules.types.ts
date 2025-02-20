import type { Database } from '$lib/domain/types/supabase';

// Base types for database tables
type DbTables = Database['public']['Tables'];

// Generic types for all game rules
export type GameRule<T extends keyof DbTables> = DbTables[T]['Row'];
export type GameRuleInsert<T extends keyof DbTables> = DbTables[T]['Insert'];
export type GameRuleUpdate<T extends keyof DbTables> = Omit<DbTables[T]['Update'], 'id'> & { id: number };

// Specific rule types
export type Ability = GameRule<"ability">;
export type AbilityInsert = GameRuleInsert<"ability">;
export type AbilityUpdate = GameRuleUpdate<"ability">; 
export type AbpBonusType = GameRule<"abp_bonus_type">;
export type AbpBonusTypeInsert = GameRuleInsert<"abp_bonus_type">;
export type AbpBonusTypeUpdate = GameRuleUpdate<"abp_bonus_type">; 
export type AbpNode = GameRule<"abp_node">;
export type AbpNodeInsert = GameRuleInsert<"abp_node">;
export type AbpNodeUpdate = GameRuleUpdate<"abp_node">; 
export type AbpNodeBonus = GameRule<"abp_node_bonus">;
export type AbpNodeBonusInsert = GameRuleInsert<"abp_node_bonus">;
export type AbpNodeBonusUpdate = GameRuleUpdate<"abp_node_bonus">; 
export type AbpNodeGroup = GameRule<"abp_node_group">;
export type AbpNodeGroupInsert = GameRuleInsert<"abp_node_group">;
export type AbpNodeGroupUpdate = GameRuleUpdate<"abp_node_group">; 
export type Ancestry = GameRule<"ancestry">;
export type AncestryInsert = GameRuleInsert<"ancestry">;
export type AncestryUpdate = GameRuleUpdate<"ancestry">; 
export type Archetype = GameRule<"archetype">;
export type ArchetypeInsert = GameRuleInsert<"archetype">;
export type ArchetypeUpdate = GameRuleUpdate<"archetype">; 
export type ArchetypeClassFeatureAlteration = GameRule<"archetype_class_feature_alteration">;
export type ArchetypeClassFeatureAlterationInsert = GameRuleInsert<"archetype_class_feature_alteration">;
export type ArchetypeClassFeatureAlterationUpdate = GameRuleUpdate<"archetype_class_feature_alteration">; 
export type ArchetypeClassFeature = GameRule<"archetype_class_feature">;
export type ArchetypeClassFeatureInsert = GameRuleInsert<"archetype_class_feature">;
export type ArchetypeClassFeatureUpdate = GameRuleUpdate<"archetype_class_feature">; 
export type ArchetypeClassFeatureReplacement = GameRule<"archetype_class_feature_replacement">;
export type ArchetypeClassFeatureReplacementInsert = GameRuleInsert<"archetype_class_feature_replacement">;
export type ArchetypeClassFeatureReplacementUpdate = GameRuleUpdate<"archetype_class_feature_replacement">; 
export type Armor = GameRule<"armor">;
export type ArmorInsert = GameRuleInsert<"armor">;
export type ArmorUpdate = GameRuleUpdate<"armor">; 
export type BonusAttackProgression = GameRule<"bonus_attack_progression">;
export type BonusAttackProgressionInsert = GameRuleInsert<"bonus_attack_progression">;
export type BonusAttackProgressionUpdate = GameRuleUpdate<"bonus_attack_progression">; 
export type BonusType = GameRule<"bonus_type">;
export type BonusTypeInsert = GameRuleInsert<"bonus_type">;
export type BonusTypeUpdate = GameRuleUpdate<"bonus_type">; 
export type Class = GameRule<"class">;
export type ClassInsert = GameRuleInsert<"class">;
export type ClassUpdate = GameRuleUpdate<"class">; 
export type ClassFeature = GameRule<"class_feature">;
export type ClassFeatureInsert = GameRuleInsert<"class_feature">;
export type ClassFeatureUpdate = GameRuleUpdate<"class_feature">; 
export type ClassFeatureBenefit = GameRule<"class_feature_benefit">;
export type ClassFeatureBenefitInsert = GameRuleInsert<"class_feature_benefit">;
export type ClassFeatureBenefitUpdate = GameRuleUpdate<"class_feature_benefit">; 
export type ClassFeatureBenefitBonus = GameRule<"class_feature_benefit_bonus">;
export type ClassFeatureBenefitBonusInsert = GameRuleInsert<"class_feature_benefit_bonus">;
export type ClassFeatureBenefitBonusUpdate = GameRuleUpdate<"class_feature_benefit_bonus">; 
export type ClassSkill = GameRule<"class_skill">;
export type ClassSkillInsert = GameRuleInsert<"class_skill">;
export type ClassSkillUpdate = GameRuleUpdate<"class_skill">; 
export type Consumable = GameRule<"consumable">;
export type ConsumableInsert = GameRuleInsert<"consumable">;
export type ConsumableUpdate = GameRuleUpdate<"consumable">; 
export type Corruption = GameRule<"corruption">;
export type CorruptionInsert = GameRuleInsert<"corruption">;
export type CorruptionUpdate = GameRuleUpdate<"corruption">; 
export type CorruptionManifestation = GameRule<"corruption_manifestation">;
export type CorruptionManifestationInsert = GameRuleInsert<"corruption_manifestation">;
export type CorruptionManifestationUpdate = GameRuleUpdate<"corruption_manifestation">; 
export type Discovery = GameRule<"discovery">;
export type DiscoveryInsert = GameRuleInsert<"discovery">;
export type DiscoveryUpdate = GameRuleUpdate<"discovery">; 
export type Element = GameRule<"element">;
export type ElementInsert = GameRuleInsert<"element">;
export type ElementUpdate = GameRuleUpdate<"element">; 
export type Equipment = GameRule<"equipment">;
export type EquipmentInsert = GameRuleInsert<"equipment">;
export type EquipmentUpdate = GameRuleUpdate<"equipment">; 
export type FavoredClassChoice = GameRule<"favored_class_choice">;
export type FavoredClassChoiceInsert = GameRuleInsert<"favored_class_choice">;
export type FavoredClassChoiceUpdate = GameRuleUpdate<"favored_class_choice">; 
export type Feat = GameRule<"feat">;
export type FeatInsert = GameRuleInsert<"feat">;
export type FeatUpdate = GameRuleUpdate<"feat">; 
export type FeatBenefit = GameRule<"feat_benefit">;
export type FeatBenefitInsert = GameRuleInsert<"feat_benefit">;
export type FeatBenefitUpdate = GameRuleUpdate<"feat_benefit">; 
export type FulfillmentQualificationMapping = GameRule<"fulfillment_qualification_mapping">;
export type FulfillmentQualificationMappingInsert = GameRuleInsert<"fulfillment_qualification_mapping">;
export type FulfillmentQualificationMappingUpdate = GameRuleUpdate<"fulfillment_qualification_mapping">; 
export type GameCharacter = GameRule<"game_character">;
export type GameCharacterInsert = GameRuleInsert<"game_character">;
export type GameCharacterUpdate = GameRuleUpdate<"game_character">; 
export type GameCharacterAbility = GameRule<"game_character_ability">;
export type GameCharacterAbilityInsert = GameRuleInsert<"game_character_ability">;
export type GameCharacterAbilityUpdate = GameRuleUpdate<"game_character_ability">; 
export type GameCharacterAbpChoice = GameRule<"game_character_abp_choice">;
export type GameCharacterAbpChoiceInsert = GameRuleInsert<"game_character_abp_choice">;
export type GameCharacterAbpChoiceUpdate = GameRuleUpdate<"game_character_abp_choice">; 
export type GameCharacterAncestry = GameRule<"game_character_ancestry">;
export type GameCharacterAncestryInsert = GameRuleInsert<"game_character_ancestry">;
export type GameCharacterAncestryUpdate = GameRuleUpdate<"game_character_ancestry">; 
export type GameCharacterArchetype = GameRule<"game_character_archetype">;
export type GameCharacterArchetypeInsert = GameRuleInsert<"game_character_archetype">;
export type GameCharacterArchetypeUpdate = GameRuleUpdate<"game_character_archetype">; 
export type GameCharacterArmor = GameRule<"game_character_armor">;
export type GameCharacterArmorInsert = GameRuleInsert<"game_character_armor">;
export type GameCharacterArmorUpdate = GameRuleUpdate<"game_character_armor">; 
export type GameCharacterClass = GameRule<"game_character_class">;
export type GameCharacterClassInsert = GameRuleInsert<"game_character_class">;
export type GameCharacterClassUpdate = GameRuleUpdate<"game_character_class">; 
export type GameCharacterClassFeature = GameRule<"game_character_class_feature">;
export type GameCharacterClassFeatureInsert = GameRuleInsert<"game_character_class_feature">;
export type GameCharacterClassFeatureUpdate = GameRuleUpdate<"game_character_class_feature">; 
export type GameCharacterConsumable = GameRule<"game_character_consumable">;
export type GameCharacterConsumableInsert = GameRuleInsert<"game_character_consumable">;
export type GameCharacterConsumableUpdate = GameRuleUpdate<"game_character_consumable">; 
export type GameCharacterCorruption = GameRule<"game_character_corruption">;
export type GameCharacterCorruptionInsert = GameRuleInsert<"game_character_corruption">;
export type GameCharacterCorruptionUpdate = GameRuleUpdate<"game_character_corruption">; 
export type GameCharacterCorruptionManifestation = GameRule<"game_character_corruption_manifestation">;
export type GameCharacterCorruptionManifestationInsert = GameRuleInsert<"game_character_corruption_manifestation">;
export type GameCharacterCorruptionManifestationUpdate = GameRuleUpdate<"game_character_corruption_manifestation">; 
export type GameCharacterDiscovery = GameRule<"game_character_discovery">;
export type GameCharacterDiscoveryInsert = GameRuleInsert<"game_character_discovery">;
export type GameCharacterDiscoveryUpdate = GameRuleUpdate<"game_character_discovery">; 
export type GameCharacterEquipment = GameRule<"game_character_equipment">;
export type GameCharacterEquipmentInsert = GameRuleInsert<"game_character_equipment">;
export type GameCharacterEquipmentUpdate = GameRuleUpdate<"game_character_equipment">; 
export type GameCharacterFavoredClassBonus = GameRule<"game_character_favored_class_bonus">;
export type GameCharacterFavoredClassBonusInsert = GameRuleInsert<"game_character_favored_class_bonus">;
export type GameCharacterFavoredClassBonusUpdate = GameRuleUpdate<"game_character_favored_class_bonus">; 
export type GameCharacterFeat = GameRule<"game_character_feat">;
export type GameCharacterFeatInsert = GameRuleInsert<"game_character_feat">;
export type GameCharacterFeatUpdate = GameRuleUpdate<"game_character_feat">; 
export type GameCharacterSkillRank = GameRule<"game_character_skill_rank">;
export type GameCharacterSkillRankInsert = GameRuleInsert<"game_character_skill_rank">;
export type GameCharacterSkillRankUpdate = GameRuleUpdate<"game_character_skill_rank">; 
export type GameCharacterSpell = GameRule<"game_character_spell">;
export type GameCharacterSpellInsert = GameRuleInsert<"game_character_spell">;
export type GameCharacterSpellUpdate = GameRuleUpdate<"game_character_spell">; 
export type GameCharacterTrait = GameRule<"game_character_trait">;
export type GameCharacterTraitInsert = GameRuleInsert<"game_character_trait">;
export type GameCharacterTraitUpdate = GameRuleUpdate<"game_character_trait">; 
export type GameCharacterWeapon = GameRule<"game_character_weapon">;
export type GameCharacterWeaponInsert = GameRuleInsert<"game_character_weapon">;
export type GameCharacterWeaponUpdate = GameRuleUpdate<"game_character_weapon">; 
export type GameCharacterWildTalent = GameRule<"game_character_wild_talent">;
export type GameCharacterWildTalentInsert = GameRuleInsert<"game_character_wild_talent">;
export type GameCharacterWildTalentUpdate = GameRuleUpdate<"game_character_wild_talent">; 
export type LegendaryGiftType = GameRule<"legendary_gift_type">;
export type LegendaryGiftTypeInsert = GameRuleInsert<"legendary_gift_type">;
export type LegendaryGiftTypeUpdate = GameRuleUpdate<"legendary_gift_type">; 
export type MonkUnchainedKiPower = GameRule<"monk_unchained_ki_power">;
export type MonkUnchainedKiPowerInsert = GameRuleInsert<"monk_unchained_ki_power">;
export type MonkUnchainedKiPowerUpdate = GameRuleUpdate<"monk_unchained_ki_power">; 
export type PrerequisiteFulfillment = GameRule<"prerequisite_fulfillment">;
export type PrerequisiteFulfillmentInsert = GameRuleInsert<"prerequisite_fulfillment">;
export type PrerequisiteFulfillmentUpdate = GameRuleUpdate<"prerequisite_fulfillment">; 
export type PrerequisiteRequirement = GameRule<"prerequisite_requirement">;
export type PrerequisiteRequirementInsert = GameRuleInsert<"prerequisite_requirement">;
export type PrerequisiteRequirementUpdate = GameRuleUpdate<"prerequisite_requirement">; 
export type PrerequisiteRequirementFulfillmentMapping = GameRule<"prerequisite_requirement_fulfillment_mapping">;
export type PrerequisiteRequirementFulfillmentMappingInsert = GameRuleInsert<"prerequisite_requirement_fulfillment_mapping">;
export type PrerequisiteRequirementFulfillmentMappingUpdate = GameRuleUpdate<"prerequisite_requirement_fulfillment_mapping">; 
export type PrerequisiteRequirementType = GameRule<"prerequisite_requirement_type">;
export type PrerequisiteRequirementTypeInsert = GameRuleInsert<"prerequisite_requirement_type">;
export type PrerequisiteRequirementTypeUpdate = GameRuleUpdate<"prerequisite_requirement_type">; 
export type QinggongMonkKiPower = GameRule<"qinggong_monk_ki_power">;
export type QinggongMonkKiPowerInsert = GameRuleInsert<"qinggong_monk_ki_power">;
export type QinggongMonkKiPowerUpdate = GameRuleUpdate<"qinggong_monk_ki_power">; 
export type QinggongMonkKiPowerType = GameRule<"qinggong_monk_ki_power_type">;
export type QinggongMonkKiPowerTypeInsert = GameRuleInsert<"qinggong_monk_ki_power_type">;
export type QinggongMonkKiPowerTypeUpdate = GameRuleUpdate<"qinggong_monk_ki_power_type">; 
export type QualificationType = GameRule<"qualification_type">;
export type QualificationTypeInsert = GameRuleInsert<"qualification_type">;
export type QualificationTypeUpdate = GameRuleUpdate<"qualification_type">; 
export type Rule = GameRule<"rule">;
export type RuleInsert = GameRuleInsert<"rule">;
export type RuleUpdate = GameRuleUpdate<"rule">; 
export type Skill = GameRule<"skill">;
export type SkillInsert = GameRuleInsert<"skill">;
export type SkillUpdate = GameRuleUpdate<"skill">; 
export type SorcererBloodline = GameRule<"sorcerer_bloodline">;
export type SorcererBloodlineInsert = GameRuleInsert<"sorcerer_bloodline">;
export type SorcererBloodlineUpdate = GameRuleUpdate<"sorcerer_bloodline">; 
export type Spell = GameRule<"spell">;
export type SpellInsert = GameRuleInsert<"spell">;
export type SpellUpdate = GameRuleUpdate<"spell">; 
export type SpellCastingTime = GameRule<"spell_casting_time">;
export type SpellCastingTimeInsert = GameRuleInsert<"spell_casting_time">;
export type SpellCastingTimeUpdate = GameRuleUpdate<"spell_casting_time">; 
export type SpellCastingTimeMapping = GameRule<"spell_casting_time_mapping">;
export type SpellCastingTimeMappingInsert = GameRuleInsert<"spell_casting_time_mapping">;
export type SpellCastingTimeMappingUpdate = GameRuleUpdate<"spell_casting_time_mapping">; 
export type SpellComponent = GameRule<"spell_component">;
export type SpellComponentInsert = GameRuleInsert<"spell_component">;
export type SpellComponentUpdate = GameRuleUpdate<"spell_component">; 
export type SpellComponentMapping = GameRule<"spell_component_mapping">;
export type SpellComponentMappingInsert = GameRuleInsert<"spell_component_mapping">;
export type SpellComponentMappingUpdate = GameRuleUpdate<"spell_component_mapping">; 
export type SpellComponentType = GameRule<"spell_component_type">;
export type SpellComponentTypeInsert = GameRuleInsert<"spell_component_type">;
export type SpellComponentTypeUpdate = GameRuleUpdate<"spell_component_type">; 
export type SpellConsumable = GameRule<"spell_consumable">;
export type SpellConsumableInsert = GameRuleInsert<"spell_consumable">;
export type SpellConsumableUpdate = GameRuleUpdate<"spell_consumable">; 
export type SpellDuration = GameRule<"spell_duration">;
export type SpellDurationInsert = GameRuleInsert<"spell_duration">;
export type SpellDurationUpdate = GameRuleUpdate<"spell_duration">; 
export type SpellDurationMapping = GameRule<"spell_duration_mapping">;
export type SpellDurationMappingInsert = GameRuleInsert<"spell_duration_mapping">;
export type SpellDurationMappingUpdate = GameRuleUpdate<"spell_duration_mapping">; 
export type SpellList = GameRule<"spell_list">;
export type SpellListInsert = GameRuleInsert<"spell_list">;
export type SpellListUpdate = GameRuleUpdate<"spell_list">; 
export type SpellListClassFeatureBenefitMapping = GameRule<"spell_list_class_feature_benefit_mapping">;
export type SpellListClassFeatureBenefitMappingInsert = GameRuleInsert<"spell_list_class_feature_benefit_mapping">;
export type SpellListClassFeatureBenefitMappingUpdate = GameRuleUpdate<"spell_list_class_feature_benefit_mapping">; 
export type SpellListFeatMapping = GameRule<"spell_list_feat_mapping">;
export type SpellListFeatMappingInsert = GameRuleInsert<"spell_list_feat_mapping">;
export type SpellListFeatMappingUpdate = GameRuleUpdate<"spell_list_feat_mapping">; 
export type SpellListSpellMapping = GameRule<"spell_list_spell_mapping">;
export type SpellListSpellMappingInsert = GameRuleInsert<"spell_list_spell_mapping">;
export type SpellListSpellMappingUpdate = GameRuleUpdate<"spell_list_spell_mapping">; 
export type SpellRange = GameRule<"spell_range">;
export type SpellRangeInsert = GameRuleInsert<"spell_range">;
export type SpellRangeUpdate = GameRuleUpdate<"spell_range">; 
export type SpellRangeMapping = GameRule<"spell_range_mapping">;
export type SpellRangeMappingInsert = GameRuleInsert<"spell_range_mapping">;
export type SpellRangeMappingUpdate = GameRuleUpdate<"spell_range_mapping">; 
export type SpellSchool = GameRule<"spell_school">;
export type SpellSchoolInsert = GameRuleInsert<"spell_school">;
export type SpellSchoolUpdate = GameRuleUpdate<"spell_school">; 
export type SpellSchoolMapping = GameRule<"spell_school_mapping">;
export type SpellSchoolMappingInsert = GameRuleInsert<"spell_school_mapping">;
export type SpellSchoolMappingUpdate = GameRuleUpdate<"spell_school_mapping">; 
export type SpellSorcererBloodlineMapping = GameRule<"spell_sorcerer_bloodline_mapping">;
export type SpellSorcererBloodlineMappingInsert = GameRuleInsert<"spell_sorcerer_bloodline_mapping">;
export type SpellSorcererBloodlineMappingUpdate = GameRuleUpdate<"spell_sorcerer_bloodline_mapping">; 
export type SpellSubdomainMapping = GameRule<"spell_subdomain_mapping">;
export type SpellSubdomainMappingInsert = GameRuleInsert<"spell_subdomain_mapping">;
export type SpellSubdomainMappingUpdate = GameRuleUpdate<"spell_subdomain_mapping">; 
export type SpellTarget = GameRule<"spell_target">;
export type SpellTargetInsert = GameRuleInsert<"spell_target">;
export type SpellTargetUpdate = GameRuleUpdate<"spell_target">; 
export type SpellTargetMapping = GameRule<"spell_target_mapping">;
export type SpellTargetMappingInsert = GameRuleInsert<"spell_target_mapping">;
export type SpellTargetMappingUpdate = GameRuleUpdate<"spell_target_mapping">; 
export type SpellcastingClassFeature = GameRule<"spellcasting_class_feature">;
export type SpellcastingClassFeatureInsert = GameRuleInsert<"spellcasting_class_feature">;
export type SpellcastingClassFeatureUpdate = GameRuleUpdate<"spellcasting_class_feature">; 
export type SpellcastingType = GameRule<"spellcasting_type">;
export type SpellcastingTypeInsert = GameRuleInsert<"spellcasting_type">;
export type SpellcastingTypeUpdate = GameRuleUpdate<"spellcasting_type">; 
export type SpellProgressionType = GameRule<"spell_progression_type">;
export type SpellProgressionTypeInsert = GameRuleInsert<"spell_progression_type">;
export type SpellProgressionTypeUpdate = GameRuleUpdate<"spell_progression_type">; 
export type SpellProgression = GameRule<"spell_progression">;
export type SpellProgressionInsert = GameRuleInsert<"spell_progression">;
export type SpellProgressionUpdate = GameRuleUpdate<"spell_progression">; 
export type Subdomain = GameRule<"subdomain">;
export type SubdomainInsert = GameRuleInsert<"subdomain">;
export type SubdomainUpdate = GameRuleUpdate<"subdomain">; 
export type TargetSpecifier = GameRule<"target_specifier">;
export type TargetSpecifierInsert = GameRuleInsert<"target_specifier">;
export type TargetSpecifierUpdate = GameRuleUpdate<"target_specifier">; 
export type Trait = GameRule<"trait">;
export type TraitInsert = GameRuleInsert<"trait">;
export type TraitUpdate = GameRuleUpdate<"trait">; 
export type Weapon = GameRule<"weapon">;
export type WeaponInsert = GameRuleInsert<"weapon">;
export type WeaponUpdate = GameRuleUpdate<"weapon">; 
export type WildTalent = GameRule<"wild_talent">;
export type WildTalentInsert = GameRuleInsert<"wild_talent">;
export type WildTalentUpdate = GameRuleUpdate<"wild_talent">; 
export type WildTalentType = GameRule<"wild_talent_type">;
export type WildTalentTypeInsert = GameRuleInsert<"wild_talent_type">;
export type WildTalentTypeUpdate = GameRuleUpdate<"wild_talent_type">; 
export type AncestryTrait = GameRule<"ancestry_trait">;
export type AncestryTraitInsert = GameRuleInsert<"ancestry_trait">;
export type AncestryTraitUpdate = GameRuleUpdate<"ancestry_trait">; 
export type AncestryTraitReplacement = GameRule<"ancestry_trait_replacement">;
export type AncestryTraitReplacementInsert = GameRuleInsert<"ancestry_trait_replacement">;
export type AncestryTraitReplacementUpdate = GameRuleUpdate<"ancestry_trait_replacement">; 
export type AncestryTraitBenefit = GameRule<"ancestry_trait_benefit">;
export type AncestryTraitBenefitInsert = GameRuleInsert<"ancestry_trait_benefit">;
export type AncestryTraitBenefitUpdate = GameRuleUpdate<"ancestry_trait_benefit">; 
export type AncestryTraitBenefitBonus = GameRule<"ancestry_trait_benefit_bonus">;
export type AncestryTraitBenefitBonusInsert = GameRuleInsert<"ancestry_trait_benefit_bonus">;
export type AncestryTraitBenefitBonusUpdate = GameRuleUpdate<"ancestry_trait_benefit_bonus">; 
export type GameCharacterAncestryTrait = GameRule<"game_character_ancestry_trait">;
export type GameCharacterAncestryTraitInsert = GameRuleInsert<"game_character_ancestry_trait">;
export type GameCharacterAncestryTraitUpdate = GameRuleUpdate<"game_character_ancestry_trait">; 
