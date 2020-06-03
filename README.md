# changelog-action
Action to deal with our changelog style

## Usage
```yaml
      - name: Fiddle with changelog stuff
        uses: ./tools/
        id: changelog
        with:
          inputFile: ./release/aviatorsEdition150/changelog.md
```
## Outputs
### Changes
- ``changes``
- The not-pretty version - just makes it look like what you see in the changelog.md file
```md
## 1.5.1
- Updated credits page
- GPWS flaps/gear messages
- PA volume made a bit louder, and persistent
- Better keyboard entry for TCPs
- ND range knob direction (#376)
- Updated SAM support to 1.0.7 (#302, #330)
```
### Pretty changes
- ``prettyChanges``
- The pretty version, with bugs turned into markdown links
<!-- ```md
## 1.5.1
- Updated credits page
- GPWS flaps/gear messages
- PA volume made a bit louder, and persistent
- Better keyboard entry for TCPs
- ND range knob direction (#376)
- Updated SAM support to 1.0.7 (#302, #330)
``` -->