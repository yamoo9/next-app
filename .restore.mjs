#!/usr/bin/env node
// scripts/.restore-dev-scripts.js
import fs from 'node:fs'
import path from 'node:path'

const packageJsonPath = path.join(process.cwd(), 'package.json')

console.log('🔧 필수 NPM 스크립트 확인...')

try {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'))

  // 필수 스크립트 정의
  const essentialScripts = {
    dev: 'bun --bun next dev --turbopack',
  }

  let modified = false
  const restoredScripts = []

  // 누락된 스크립트 복원
  for (const [scriptName, scriptCommand] of Object.entries(essentialScripts)) {
    if (!packageJson.scripts[scriptName]) {
      packageJson.scripts[scriptName] = scriptCommand
      modified = true
      restoredScripts.push(scriptName)
      console.log(`✅ 스크립트 복원: "${scriptName}" -> "${scriptCommand}"`)
    }
  }

  if (modified) {
    // 수정된 package.json 저장
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + '\n'
    )

    console.log('\n🎉 Package.json 성공적으로 업데이트됨!')
    console.log('\n📋 사용 가능한 명령:')
    restoredScripts.forEach((script) => {
      console.log(`   bun ${script}`)
    })
  } else {
    console.log('✅ 모든 필수 스크립트가 이미 포함되어 있습니다.')
  }
} catch (error) {
  console.error('❌ 스크립트 복원 오류:', error.message)
  process.exit(1)
}
